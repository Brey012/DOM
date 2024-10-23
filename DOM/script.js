// const contentArea =  document.getElementById("contentArea");

// contentArea.innerHTML = "<p>Este es un nuevo párrafo</p>"

// contentArea.insertAdjacentHTML("beforeend", "<p>Este es un otro nuevo párrafo</p>")


const listArea = document.getElementById("listArea");

// innerHTML es una propiedad que permite modificar el contenido HTML de un elemento HTML
listArea.innerHTML += "<li>Item 5</li>";

// insertAdjacentHTML es una función que permite insertar contenido HTML en un elemento HTML
listArea.insertAdjacentHTML("beforeend", "<li>Item 6</li>");

// Crear un nuevo elemento HTML
const newPElement = document.createElement("p");
newPElement.textContent = "Este es un nuevo párrafo creado con CreateElement";

// Agregar el nuevo elemento HTML al contenido del elemento con id contentArea
// contentArea.append(newPElement);

// Eliminar el nuevo elemento HTML del contenido del elemento con id contentArea
// contentArea.removeChild(newPElement);

// Eliminar el primer elemento de la lista
 const firstItem = document.querySelector("li");
 firstItem.remove();

// Eliminar el último elemento de la lista
const lastItem = document.querySelector("ul");
lastItem.removeChild(lastItem.lastElementChild);

// Clonar elementos
const contentArea = document.querySelector("#contentArea");
const originalP = contentArea.querySelector("p");
const clonedP = originalP.cloneNode(true);
contentArea.append(clonedP);
clonedP.textContent = "Este es un párrafo clonado";

// Reemplazar elementos
const list = document.querySelector("#listArea");
const itemToReplace = listArea.children[2];
itemToReplace.replaceWith(clonedP);