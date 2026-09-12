import "/vendor/model-viewer-4.3.1.min.js";

const card = document.getElementById("employee-id");
const figure = card?.closest(".cover-id");

if (card && figure) {
  const showModel = () => figure.classList.add("is-loaded");
  card.addEventListener("load", showModel);
  card.addEventListener("error", () => {
    figure.classList.remove("is-loaded");
    card.showPoster();
  });
  if (card.loaded) showModel();
}
