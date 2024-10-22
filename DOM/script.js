
// Modificando atributos y propiedades

const input = document.querySelector('input');
console.log(input);

console.dir(input);

// Atributos
input.value = 'Apellido';

// Modificando texto

const titulo = document.querySelector("#app-title");
console.log(titulo);
console.dir(titulo);

titulo.textContent = "Nuevo título";
titulo.innerText = "otro título";

// Modificando estilos

const header = document.querySelector('header');
console.log(header);

header.style.backgroundColor = 'cadetblue';

// Modificando clases
const menu = document.querySelector('.menu');

menu.className = 'main-menu';

// Modificando visibilidad de elementos
const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', () => {
    header.classList.toggle('invisible');
});



