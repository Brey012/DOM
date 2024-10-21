// map() 

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num)

console.log(squaredNumbers); // [1, 4, 9, 16, 25]


// forEach()

const colors = ['red', 'green', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(iteratedColors); // undefined

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = fahrenheit.map(f => Math.round((f - 32) * 5 / 9));

console.log(celsius); // [-18, 0, 7, 10, 24, 27, 37, 49]

const newNumbers = [1, 3, 5, 7];

let sum = 0;

newNumbers.forEach(num => sum += num);

console.log(sum); // 16

const animals = ['dog', 'cat', 'fish', 'cow', 'elephant'];
console.log(animals.slice(2)); // ['fish', 'cow', 'elephant']
console.log(objects.slice(2, 4)); // ['fish', 'cow']
console.log(objects.slice(-2)); // ['cow', 'elephant']
console.log(objects.slice(1, -2)); // ['cat', 'fish']