let authentication = false;
const usersList = [3][3];
let user = "";
let password = "";
let userIndex = 0;

function createUsers() {
    for (let index = 0; index < array.usersList ; index++) {
        usersList[index][0] = prompt("Introduce tu usuario");
        usersList[index][1] = prompt("Introduce tu contraseña");
    }
}

function login() {
    for (let index = 0; index < array.usersList ; index++) {
        user = prompt("Introduce tu usuario");
        if (user === usersList[index][0]){
            password = prompt("Introduce tu contraseña");
            if (password === usersList[index][1]){
                authentication = true;
                userIndex = index;
            }
        } else {
            !authentication;
            alert("Usuario o contraseña incorrectos");
        }
    }
}






