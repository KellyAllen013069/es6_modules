//import { library } from "webpack";
import WishList from "./wishlist"

let wishes = new WishList;

console.log("Hello World");

// TODO
let form = document.querySelector("#submitForm");
let carMake = document.querySelector("#makeInput");
let carModel = document.querySelector("#modelInput");
let carYear = document.querySelector("#yearInput");
let pMake = document.querySelector("#car-make");
let pModel = document.querySelector("#car-model");
let pYear = document.querySelector("#car-year");
let removeBtn = document.querySelector("#remove-btn");
let ulWish = document.querySelector("#wishlist-ul");


//EVENT LISTENERS

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    pMake.textContent = car.make;
    pModel.textContent = car.model;
    pYear.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
    ulWish.innerHTML = "";
    
    wishes.list.forEach((car) => {
        let newLi = document.createElement("li");
        newLi.textContent = `${car.make} ${car.model}`;
        newLi.addEventListener("click", () => showCarDetails(car));
        ulWish.appendChild(newLi);
    })
}

function addCar(e) {

    e.preventDefault();
   /*  alert(carMake.value);
    alert(carModel.value);
    alert(carYear.value); */
    let make = carMake.value;
    let model = carModel.value;
    let year = carYear.value;

    wishes.add(make, model, year);

    updateDOMList();

    carMake.value = "";
    carModel.value = "";
    carYear.value = "";



}

function removeCar() {

    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishes.remove(carId);

    updateDOMList();
    pMake.textContent = "";
    pModel.textContent = "";
    pYear.textContent = "";

    removeBtn.disabled = true;

} 
