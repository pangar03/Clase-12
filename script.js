const num1 = parseInt(prompt("Ingrese el numero 1"));
const num2 = parseInt(prompt("Ingrese el numero 2"));
const num3 = parseInt(prompt("Ingrese el numero 3"));

const parrafo = document.querySelector("#parrafo");

if(num1 > num2 && num1 > num3){
    parrafo.innerHTML = "El numero mas grande es: " + num1;
}

else if(num2 > num1 && num2 > num3){
    parrafo.innerHTML = "El numero mas grande es: " + num2;
}

else{
    parrafo.innerHTML = "El numero mas grande es: " + num3;
}