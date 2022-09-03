import  Car  from "./car";

export default class WishList {
 list = [];
 nextId = 0;

 add (make, model, year) {
    let c = new Car(++this.nextId, make, model, year)
    this.list.push(c);
 }

 remove(carId) {
    let i = this.list.findIndex((car) => car.id == car.id)
    this.list.splice(i, 1);
    console.log(this.list);
 }

}