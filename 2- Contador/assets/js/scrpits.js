var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

// increment (pegar o valor de currentNumber quando for clicado)
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

//
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


// criar cond que so pode contar ate 10 ou 0
// usar o metodo eventlist para nao usar o botão click
// tambem se o numero for negativo colocar vermelho nele