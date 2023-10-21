var precio = 400000

var precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var number = document.querySelector(".cantidad")
function suma(){
    var numberFormated = parseInt(number.innerText)
    number.innerText = numberFormated + 1
} 

function resta(){
    var numberFormated = parseInt(number.innerText)
    if(numberFormated > 0){
    number.innerText = numberFormated - 1
    }
} 