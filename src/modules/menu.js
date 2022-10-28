import ctm from '../img/tikka-masala.jpg';
import crd from '../img/crisp-roast.jpg';
import cps from '../img/cedar-plank-salmon.jpg';
import cls from '../img/potato-leek-soup.jpg';
import emd from '../img/empanada-dough.jpg';
import bbs from '../img/bouillabaisse.jpg';
import cbl from '../img/creme-brulee.jpg';
import pnc from '../img/panna-cotta.jpg';

export function renderMenu() {

  class Food {
    constructor(name, image, nationality, price) {
      this.name = name;
      this.image = image;
      this.nationality = nationality;
      this.price = price
    }

    createFoodCard() {
      const foodCard = document.createElement("div");
      foodCard.classList.add("food-card");

      const foodCardH3 = document.createElement("h3");
      foodCardH3.innerHTML = this.name;
      
      const foodCardImageContainer = document.createElement("div");
      foodCardImageContainer.classList.add("food-image");

      const foodCardImage = document.createElement("img");
      foodCardImage.src = this.image;
      foodCardImage.alt = this.name;

      const foodNationality = document.createElement("span");
      foodNationality.innerHTML = this.nationality;

      const foodPrice = document.createElement("span");
      foodPrice.innerHTML = this.price;

      foodCard.appendChild(foodCardH3);
      foodCardImageContainer.appendChild(foodCardImage);
      foodCard.appendChild(foodCardImageContainer);
      foodCard.appendChild(foodNationality);
      foodCard.appendChild(foodPrice);

      return foodCard;

    }

  }

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  const food1 = new Food("Chicken Tikka Masala", ctm, "Indian Dish", "$120");
  const food2 = new Food("Crisp Roast Duck", crd, "Chinese Dish", "$80");
  const food3 = new Food("Cedar-Plank Salmon", cps, "American Dish", "$120");
  const food4 = new Food("Creamy Leek Soup", cls, "French Dish", "$50");
  const food5 = new Food("Empanada Dough", emd, "Portuguese Dish", "$45");
  const food6 = new Food("Bouillabaisse", bbs, "French Dish", "$150")
  const food7 = new Food("Crème Brûlée", cbl ,"French Dessert", "$100");
  const food8 = new Food("Panna Cotta", pnc, "Italian Dish", "$200");

  menuContainer.appendChild(food1.createFoodCard());
  menuContainer.appendChild(food2.createFoodCard());
  menuContainer.appendChild(food3.createFoodCard());
  menuContainer.appendChild(food4.createFoodCard());
  menuContainer.appendChild(food5.createFoodCard());
  menuContainer.appendChild(food6.createFoodCard());
  menuContainer.appendChild(food7.createFoodCard());
  menuContainer.appendChild(food8.createFoodCard());

  return menuContainer;

}