//01: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

// let person = {
//     name: "Jhon",
//     age : 30 
// }

// let {name,age} = person;

// console.log(name);



//02: Create a module that exports a function to calculate the area of a circle and import it into another file.






//03: Create a class Rectangle with properties width and height and a method to calculate the area.

// class Rectangle {
//     constructor(width,height) {
//         this.width = width;
//         this.height = height;
//     }
//     calculateArea(){
//         if (this.width < 0 || this.height < 0) {
//             throw new Error("cannot be negative number");
//         }
//         return this.width * this.height;
//     }
// }
// let Area = new Rectangle(-20,-30);
// console.log(Area.calculateArea());



//04: Create a class Person with a getter and setter for the fullName property.


// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('Jane Doe');
// console.log(person.getName()); 


//05: Create a class expression for a Circle with a method to calculate the circumference.


// const Circle = class {
//     constructor(radius) {
//         if (radius < 0) {
//             throw new Error("Radius cannot be negative");
//         }
//         this.radius = radius;
//     }

//     calculateCircumference() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// let Radis = new Circle(-5);
// console.log(Radis.calculateCircumference());


//06: Create an object with computed property names based on variables.

// let PropName = "UserName";

// let User ={
//     [PropName]: "Jhon Doe",
//     email : "jhondoe@gmail.com"
// }

// console.log(User);



//07: Create a base class Animal and a derived class Dog that inherits from Animal.

// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     parent(){
//         return "Animal name is " + this.name;
//     }
// }

// class Info extends Animal{
//     constructor(name,color) {
//         super(name);
//         this.color = color;
//     }
//     show(){
//         return this.parent() + " & color is " + this.color;
//     }
// };

// let AnimalInfo = new Info("Dog","Black");
// console.log(AnimalInfo.show());




//08: Use new.target to create an abstract class Shape that cannot be instantiated directly.






// 09: Create a class MathUtil with a static method square to calculate the square of a number.

// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello() {
//       return "Hello " + this.name;
//     }
// };
// const myCar = new Car("Ford");
// console.log(Car.hello());



// 10: Create an object with a symbol as a property key and demonstrate accessing it.

// let MySymbol = Symbol();
// let object = {
//     [MySymbol] : "Welcome To Programming World"
// };

// console.log(object[MySymbol])

