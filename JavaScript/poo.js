// Estructura de datos 
// key: value

// objeto = {
//     key: "value",
//     key2: "value2",
//     key3: "value3"
//     Method: function() {
// }

const people = {
    name: "Juan",
    age: 25,
    country: "Colombia",
    blood: "O+",
    profession: "Developer",
    address: {
        street: "Calle 123",
        city: "Medellin",
        country: "Colombia"
    },

    greeting() {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(people);
people.greeting();

//agregar una propiedad al objeto
people.phone = "123456789";
console.log(people.phone);

// agregar un método al objeto
people.bye = () => {
    console.log("Goodbye");
}

// eliminar una propiedad del objeto
delete people.blood;

// Función constructora
function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
}

class Person2 {
    // constructor
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    // método
    greeting() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old");
    }
}   

const person1 = new Person2("Juan", 25, "Colombia"); // objeto
person1.greeting();

