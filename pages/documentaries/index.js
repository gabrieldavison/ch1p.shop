const documentaryContainers = document.querySelectorAll(
  ".documentary-container"
);

documentaryContainers.forEach((container) => {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("documentary-title")) {
      showDescription(e.target.nextElementSibling);
    }
  });
});

function showDescription(target) {
  if (target.classList.contains("hidden")) {
    hideAllDescriptions();
    target.classList.toggle("hidden");
  } else {
    hideAllDescriptions();
  }
}

function hideDescription(target) {}

const documentaryInfoContainers = document.querySelectorAll(
  ".documentary-info"
);
function hideAllDescriptions() {
  documentaryInfoContainers.forEach((container) => {
    container.classList.add("hidden");
  });
}
