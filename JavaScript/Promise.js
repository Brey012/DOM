// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let operationSuccessful = true;
//         if (operationSuccessful) {
//             resolve("Operation successful");
//         } else {
//             reject("Operation failed");
//         }
//     }, 2000);
// })

// promise.then((message) => {
//     console.log(message);
// })
// .catch((message) => {
//     console.log(message);
// })

// function fetchData() {
//     fetch("https://api.api-onepiece.com/v2/characters/en")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

async function fetchData() {
    try {
        // Espera la respuesta de la llamada a la API
        let response = await fetch("https://api.api-onepiece.com/v2/characters/en");
        
        // Convierte la respuesta a formato JSON
        let data = await response.json();
        
        // Imprime los datos en la consola
        console.log(data);
    } catch (error) {
        // Si hay un error, lo imprime en la consola
        console.log(error);
    }
}

const url = "https://api.api-onepiece.com/v2/characters/en";

async function fetchData() {
    try {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
  ];
  
  async function fetchNewData() {
    try {
      for await (let url of urls) {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  }