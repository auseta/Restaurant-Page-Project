import "./style/style.css";
import { renderMenu } from "./modules/menu";
import renderContact from "./modules/contact";
import food from "./img/main-food.png";

function renderHome() {
  let home = true;
  let menu = false;
  let contact = false;
  //   //* Contenedor Absoluto
  const contentContainer = document.querySelector("#content");

  //* render Nav
  function renderNav() {
    const navContainer = document.createElement("div");
    navContainer.classList.add("nav");

    const nav = document.createElement("nav");
    const ulNav = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a");

    a1.innerHTML = "Home";
    a2.innerHTML = "Menu";
    a3.innerHTML = "Contact us";

    a1.addEventListener("click", () => {
      const menuContainer = document.querySelector(".menu");
      const contactContainer = document.querySelector(".contact");
      if (!home) {
        if (menuContainer !== null) {
          menuContainer.remove();
        }
        if (contactContainer !== null) {
          contactContainer.remove();
        }
        menu = false;
        contact = false;
        home = true;
        renderMain();
        renderImage();
      }
    });

    a2.addEventListener("click", () => {
      const mainContainer = document.querySelector(".main");
      const imageContainer = document.querySelector(".image");
      const contactContainer = document.querySelector(".contact");
      if (!menu) {
        if (mainContainer !== null && imageContainer !== null) {
          mainContainer.remove();
          imageContainer.remove();
        }
        if (contactContainer !== null) {
          contactContainer.remove();
        }
        menu = true;
        contact = false;
        home = false;
        contentContainer.appendChild(renderMenu())
      }
    });

    a3.addEventListener("click", () => {
      const menuContainer = document.querySelector(".menu");
      const mainContainer = document.querySelector(".main");
      const imageContainer = document.querySelector(".image");
      if (!contact) {
        if (mainContainer !== null && imageContainer !== null) {
          mainContainer.remove();
          imageContainer.remove();
        }
        if (menuContainer !== null) {
          menuContainer.remove();
        }
        menu = false;
        contact = true;
        home = false;
        contentContainer.appendChild(renderContact())
      }
    });

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    ulNav.appendChild(li1);
    ulNav.appendChild(li2);
    ulNav.appendChild(li3);
    nav.appendChild(ulNav);
    navContainer.appendChild(nav);
    contentContainer.appendChild(navContainer);
  }

  function renderMain() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main");

    const mainTitleContainer = document.createElement("div");
    mainTitleContainer.classList.add("main-title");

    const mainTitleH1 = document.createElement("h1");
    mainTitleH1.innerHTML = "Seta's Restaurant";

    const mainTitleP = document.createElement("p");
    mainTitleP.innerHTML =
      "We are a restaurant with more than 40 years of service to the community. We have the most trained staff and the best chefs in the country. We are completely convinced that our dishes will be absolutely delicious for you. Come visit us!";

    const mainButtonContainer = document.createElement("div");
    mainButtonContainer.classList.add("main-button");
    const mainButtonSpan = document.createElement("span");
    mainButtonSpan.innerHTML = "Are you hungry? see our menu!";
    const mainButtonButton = document.createElement("button");
    mainButtonButton.innerHTML = "Menu";

    mainButtonContainer.appendChild(mainButtonSpan);
    mainButtonContainer.appendChild(mainButtonButton);
    mainTitleContainer.appendChild(mainTitleH1);
    mainTitleContainer.appendChild(mainTitleP);
    mainContainer.appendChild(mainTitleContainer);
    mainContainer.appendChild(mainButtonContainer);

    contentContainer.appendChild(mainContainer);
  }

  function renderImage() {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    const image = document.createElement("img");
    image.src = food;
    image.alt = "food";

    imageContainer.appendChild(image);
    contentContainer.appendChild(imageContainer);
  }

  function renderFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    const footerSpan = document.createElement("span");
    footerSpan.innerHTML = "restaurant and page created by Augusto Seta 🍝";

    footerContainer.appendChild(footerSpan);
    contentContainer.appendChild(footerContainer);
  }

  renderNav();
  renderMain();
  renderImage();
  renderFooter();
}

renderHome();
