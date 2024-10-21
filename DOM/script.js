
// DOM -  Traverse the DOM

// Traer el elemento padre
const parent = document.getElementById("parent");
console.log(parent);

// traer los hijos del elemento padre
const children = parent.children;
console.log(children);

// traer el primer hijo del elemento padre
const firstChild = parent.firstElementChild;
console.log(firstChild);

// traer el último hijo del elemento padre
const lastChild = parent.lastElementChild;
console.log(lastChild);

// traer el hermano anterior del elemento padre
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

// traer el hermano siguiente del elemento padre
const nextSibling = parent.nextElementSibling; 
console.log(nextSibling);

// traer el padre del elemento padre
const parentElement = parent.parentElement;
console.log(parentElement); 

// traer los nodos hijos del elemento padre
const childNodes = parent.childNodes;
console.log(childNodes); 


// de hijos a padre

// traer el padre del elemento hijo
const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

// traer el padre del padre del elemento hijo
const grandParent = children2.parentElement;
console.log(grandParent);

// traer el padre del padre del padre del elemento hijo
const greatGrandParent = children2.closest("menu");
console.log(greatGrandParent);

