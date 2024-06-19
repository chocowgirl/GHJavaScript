const BTN =document.getElementById("btnSquare");
const userInput = document.getElementById("entryNum")


//it's better to declare functions apart from the event listener b/c this structure is more modular / recyclable
function squareOf(number){
    return number * number;
}  

function calculateSquare(){
    
    let value = userInput.valueAsNumber;
    console.log(value);
    console.log(typeof value);

    let squareValue = squareOf(value);

    const resultInput =document.getElementById("resultNum");
    resultInput.value = squareValue;
}



BTN.addEventListener("click", calculateSquare) //important to not put the () after the function callback -> this gives the reference to the function and waits for the button click to execute the function.


userInput.addEventListener("keyup", (event) => {
    if(event.key !== "Enter") return;
    calculateSquare();
})