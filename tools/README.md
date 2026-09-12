# Employee ID model

The hero uses public/assets/employee-id.glb, exported from EmployeeID_Refined.blend
in the user's Downloads/EmployeeID_3D folder. Only the product root and its
children are exported: the card, portrait, lettering, clip and lanyard.
The studio backdrop, cameras and lights are excluded. The source file is unchanged.

Regenerate using Blender (run from the repository root):

    blender --background /path/to/EmployeeID_Refined.blend --python tools/export_employee_id.py -- --output MyProjecProfile/public/assets

The script also renders employee-id-poster.png with an alpha channel as the
loading / no-JavaScript / load-error fallback. No auto-rotation is enabled;
visitors rotate the card with dragging or keyboard controls. Vertical touch
scrolling and page scrolling with the mouse wheel are preserved.

Serve MyProjecProfile/public with a static HTTP server to preview, as described
in the main README. No bundler or npm install is needed to run the site.
