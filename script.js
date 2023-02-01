const screenDisplay = document.querySelector('.display')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const dotButton = document.querySelector('.dot')


// Math function
const add = (add1,add2) => screenDisplay.textContent = (add1+add2).toFixed(3);
const subtract = (sub1,sub2) => screenDisplay.textContent = (sub1 - sub2).toFixed(3);
const multiply = (mult1,mult2) => screenDisplay.textContent = (mult1 * mult2).toFixed(3);
const divide = (div1,div2) => screenDisplay.textContent = (div1/div2).toFixed(3);


let storage = ''
let userOperation
let display = ''
function displayNum(num){
    display += num;
    screenDisplay.textContent = display;
}
// Dot Button
let dotCount
dotButton.addEventListener("click", () => {
    for ( x=0;x < display.length;x++){
        if (display[x] == '.')
            return;
        else
            dotCount = 1
    }
    if (dotCount === 1)
        displayNum('.');
        dotCount = 0
})

// Buttons 0-9
const numList = ['zero','one','two','three','four','five','six','seven','eight','nine']
for (x= 0;x< numList.length;x++){
    let num = document.querySelector(`.${numList[x]}`);
    num.addEventListener("click", () => {
    displayNum(num.textContent);
});
}
//Clear Button
clearButton.addEventListener("click", () => {
    storage = ''
    display = ''
    screenDisplay.textContent = ''
})

// Delete Button
deleteButton.addEventListener("click", () => {
    let newDisplay = screenDisplay.textContent = screenDisplay.textContent.slice(0,-1)
    display = newDisplay
})
// Buttons -+/*
const operatorList = ['divide','multiply','subtract','add']
for (x= 0;x< 4;x++){
    const operatorSelect = document.querySelector(`.${operatorList[x]}`)
    operatorSelect.addEventListener("click", () => {
        if (checkEqual > 0){
            storage = screenDisplay.textContent;
            display = ''
            userOperation = operatorSelect.className
        }
        else if (storage !== '' && display !== ''){
            userOperation = operatorSelect.className
            calc()
            storage = screenDisplay.textContent
            display = ''
        }
        else {
            storage = screenDisplay.textContent;
            display = ''
            userOperation = operatorSelect.className
        }
        checkEqual = 0
    });
}
// Calculates two numbers
function calc(){
    if (display == 0 && userOperation == 'divide')
        return screenDisplay.textContent = 0 
    if (userOperation == 'add') 
        add(Number(storage),Number(display));
    if (userOperation == 'subtract') 
        subtract(Number(storage),Number(display));
    if (userOperation == 'divide') 
        divide(Number(storage),Number(display));
    if (userOperation == 'multiply') 
        multiply(Number(storage),Number(display));

    // Fix decimals (7.00 will be 7)
    for (let x = screenDisplay.textContent.length-1; x > 0; x--) {
        if (screenDisplay.textContent[x] !== '0') {
            break;
        }
        if (screenDisplay.textContent[x-1] === '.') {
            screenDisplay.textContent = screenDisplay.textContent.slice(0, screenDisplay.textContent.indexOf("."));
            break;
        }
    }  
}

// Equal sign
let checkEqual = 0
const equalSign = document.querySelector('.equal')
equalSign.addEventListener("click", () => {

    if (checkEqual > 0){
        return;
    }
    else{
        calc()
        storage = screenDisplay.textContent
        display = ''
        checkEqual = 1
    }
})


