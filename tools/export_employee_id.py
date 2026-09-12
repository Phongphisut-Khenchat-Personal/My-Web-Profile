"""Export only the employee ID assembly; leave the source .blend untouched.

blender --background EmployeeID_Refined.blend --python tools/export_employee_id.py -- --output MyProjecProfile/public/assets
"""
import argparse
from pathlib import Path
import sys
import bpy

parser = argparse.ArgumentParser()
parser.add_argument('--output', required=True)
args = parser.parse_args(sys.argv[sys.argv.index('--') + 1:])
out = Path(args.output).resolve()
out.mkdir(parents=True, exist_ok=True)
scene = bpy.context.scene
root = bpy.data.objects.get('EMPLOYEE ID | Product root')
if root is None:
    raise RuntimeError('Employee ID product root was not found')
assembly = [root, *root.children_recursive]
for obj in scene.objects:
    if obj.type not in {'LIGHT', 'CAMERA'} and obj not in assembly:
        obj.hide_render = True

# A transparent render remains visible while WebGL loads or is unavailable.
scene.render.film_transparent = True
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_mode = 'RGBA'
scene.render.resolution_x = 840
scene.render.resolution_y = 1050
scene.render.resolution_percentage = 100
scene.render.filepath = str(out / 'employee-id-poster.png')
if scene.render.engine == 'CYCLES':
    scene.cycles.samples = 32
    scene.cycles.use_denoising = True
bpy.ops.render.render(write_still=True)

# Blender's procedural wave/ramp and bump nodes are not glTF textures.
# Preserve the cloth's navy base color; its modeled weave still adds detail.
cloth = bpy.data.materials.get('LANYARD | woven midnight polyester')
if cloth and cloth.use_nodes:
    shader = next(n for n in cloth.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    for name in ('Base Color', 'Normal'):
        for link in list(shader.inputs[name].links):
            cloth.node_tree.links.remove(link)
    shader.inputs['Base Color'].default_value = cloth.diffuse_color
    shader.inputs['Sheen Weight'].default_value = 0.0

# Curves and text must be mesh geometry for glTF, including the name and clip.
bpy.ops.object.select_all(action='DESELECT')
for obj in assembly:
    if obj.type in {'MESH', 'CURVE', 'FONT', 'SURFACE'}:
        obj.hide_set(False)
        obj.select_set(True)
        if obj.type in {'CURVE', 'FONT'}:
            obj.data.resolution_u = 4
            obj.data.render_resolution_u = 4
bpy.context.view_layer.objects.active = next(o for o in assembly if o.type == 'MESH')
bpy.ops.object.convert(target='MESH')
root.scale = (0.1, 0.1, 0.1)
root.select_set(True)
bpy.ops.export_scene.gltf(
    filepath=str(out / 'employee-id.glb'),
    export_format='GLB',
    use_selection=True,
    export_apply=True,
    export_yup=True,
    export_animations=False,
    export_cameras=False,
    export_lights=False,
)
print('Employee ID assets exported to', out)