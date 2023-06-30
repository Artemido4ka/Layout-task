let burgerElement = document.getElementById("burger-id");
let headerContainerElement = document.getElementById("header-container-id");

const handleClick = () => {
  isShown = !!(burgerElement.style.display === "flex");

  if (isShown) {
    burgerElement.style.display = "none";
    headerContainerElement.style.display = "none";
    return;
  }

  burgerElement.style.display = "flex";
  headerContainerElement.style.display = "block";
  headerContainerElement.style.opacity = 0.7;
};
