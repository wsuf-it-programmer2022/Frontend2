
// everything is an object in Javascript
// except: null, string, bool, number, undefined

const myArray = ['john', 30, true];
myArray[0]; // 'john'

const myObject = {};

const myPlayer = {
  name: "John", // property: key-value pair
  health: 100, // key: name, value: 100
  isAlive: true,
  tools: ['sword', 'shield', 'bow'],
  profile: {
    age: 30,
    gender: 'male'
  }
};

console.log(myPlayer.name); // 'John'

// add a new property
myPlayer.score = 100;

myPlayer.levelUp = function() { // method: function inside an object
  myPlayer.health += 10;
}

myPlayer.levelUp();

// delete a property
delete myPlayer.score;

// loop through an object by keys
for (const key in myPlayer) {
  console.log(key);
  console.log(myPlayer[key]);
}

// console.log(global);

const person = {
  name: 'John',
  age: 30,
  wave: function() {
    // this refers to the object that the method is called on
    function getHands() {
      console.log(this);
      console.log(this.name+' waves with both hands');
    }
    // arrow function does not have its own this keyword
    const setHands = () => {
      console.log(this);
      console.log(this.name+' waves with both hands');
    }
    // getHands();
    setHands();
    console.log(this.name+' says hi');
  }
};

person.wave();