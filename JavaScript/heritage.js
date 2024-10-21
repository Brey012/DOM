class Animal {
    // Constructor
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    // Method
    sound() {
        console.log("I am an animal and I make sounds");
    }
}

class dog extends Animal {
    // Constructor
    constructor(name, type, breed) {
        super(name, type);
        this.breed = breed;
    }

    // Method
    sound() {
        console.log("I am a dog and I bark");
    }

    // Method
    run() {
        console.log("I am a " + this.name + " and I run");
    }
}

const dog1 = new dog("Rex", "Dog", "Bulldog");
console.log(dog1);
dog1.sound();
dog1.run();

// Adding a new method to the dog class
dog1.newMethod = function() {
    console.log("I am a new method");
}

dog.prototype.secondNewMethod = function() {
    console.log("I am a second new method");
}