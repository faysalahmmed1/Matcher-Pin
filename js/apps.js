function GetPin (){
    const Pin = Math.round(Math.random()*1000000)
    const getString = Pin + '';
    if(getString.length == 6){
        return Pin;
    }
    else{
        return GetPin;
    }
}

function generatePin (){
    const Pin = GetPin ();
    document.getElementById('display-pin').value = Pin;
 
}


document.getElementById('key-pad').addEventListener('click' , function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');


    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';

        }
    }
    else{
        const calcInput = document.getElementById('typed-numbers');
    const previousNumber = calcInput.value;
    const newCalc = previousNumber + number;
    
    calcInput.value = newCalc;
    }
   
})
function varifyPin(){
    const Pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-numbers').value;
    const notifySecces = document.getElementById('notify-succes');
    const notifyError = document.getElementById('notify-error');

    if(Pin == typeNumber){

        notifySecces.style.display = 'block'
        notifyError.style.display= 'none';
    }
    else{
        notifyError.style.display = 'block'
        notifySecces.style.display = 'none'; 

    }
}