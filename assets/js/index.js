var precio = 400000;

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

var number = document.querySelector(".cantidad");
function suma(){
    var numberFormated = parseInt(number.innerText);
    number.innerText = numberFormated + 1;
} 

function resta(){
    var numberFormated = parseInt(number.innerText);
    if(numberFormated > 0){
    number.innerText = numberFormated - 1;
    }
}

var number1 = document.querySelector(".precio-inicial");
var number2 = document.querySelector(".cantidad");
var result = document.querySelector(".valor-total");

function multiplicacion(){
    var numberOneFormated = parseInt (number1.innerText);
    var numberTwoFormated = parseInt (number2.innerText);
    result.innerText = numberOneFormated * numberTwoFormated;
}    
