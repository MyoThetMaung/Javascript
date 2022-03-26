// class
class Car {
    constructor(name,model){
        this.name = name;
        this.model = model;
    }
    drive = () => {
        console.log(`${this.name} is driving`);
    }
}

class BrandNew extends Car{
    constructor(name,model,color){
        super(name,model);
        this.color = color;
    }
    car_color = ()=> {
        return `${this.name} is ${this.color}`;
    }
}
let mercedes = new Car("Mercedes","C300");
mercedes.drive();

let honda = new BrandNew("Honda","Civic","pink");
console.log(honda.car_color());


