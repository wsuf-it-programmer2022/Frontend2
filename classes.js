
// class is a blueprint for creating objects with pre-defined properties and methods
class Player {
  constructor(name) {
    this.name = name;
    this.alive = true;
    this.health = 100;
  }
  shoot() {
    console.log(this.name+' shoots');
  }
  levelUp() {
    this.health += 10;
  }
}
// instantiate an object
const myPlayer = new Player('John');
console.log(typeof(myPlayer))
myPlayer.shoot();

// note: javascript uses prototypeal inheritance and not object-oriented inheritance



class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name+' eats');
  }
}

class Dog extends Animal {
  // constructor is optional
  // constructor is called when an object is instantiated
  constructor(name) {
    // super calls the parent constructor
    super(name);
    // super makes the this keyword available in the child class
    this.furLength = 10;
  }
  bark() {
    console.log(this.name+' barks');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.race = 'persian';
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
    });
  }
  purr() {
    console.log(this.name+' meows');
  }
}

const myDog = new Dog('Rex');
console.log(myDog.name);
myDog.eat();
myDog.bark();

const myCat = new Cat('Mia');
console.log(myCat.legscount);
myCat.legscount = 5;
console.log(myCat.legscount);



function myFunction() {
  console.log('hello');
}
myFunction.whatever = 5;
console.log(myFunction.whatever);
console.log(myFunction.name);