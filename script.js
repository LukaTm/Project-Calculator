const screenDisplay = document.querySelector('.display')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')


// Math function
const add = (add1,add2) => screenDisplay.textContent = (add1+add2).toFixed(2);
const subtract = (sub1,sub2) => screenDisplay.textContent = (sub1 - sub2).toFixed(2);
const multiply = (mult1,mult2) => screenDisplay.textContent = (mult1 * mult2).toFixed(2);
const divide = (div1,div2) => screenDisplay.textContent = (div1/div2).toFixed(2);


let storage = '' 
let userOperation
let display = ''
function displayNum(num){
    display += num;
    screenDisplay.textContent = display;
}

// Buttons 0-9
const numList = ['zero','one','two','three','four','five','six','seven','eight','nine']
for (x= 0;x< numList.length;x++){
    let num = document.querySelector(`.${numList[x]}`);
    num.addEventListener("click", () => displayNum(num.textContent));
}
//Clear Button
clearButton.addEventListener("click", () => {
    storage = ''
    display = ''
    screenDisplay.textContent = ''
})

// Buttons -+/*
deleteButton.addEventListener("click", () => {
    let newDisplay = screenDisplay.textContent = screenDisplay.textContent.slice(0,-1)
    display = newDisplay
})

const operatorList = ['divide','multiply','subtract','add']
for (x= 0;x< 4;x++){
    const operatorSelect = document.querySelector(`.${operatorList[x]}`)
    operatorSelect.addEventListener("click", () => {
        if (storage !== '' && display !== ''){
            calc()
            userOperation = operatorSelect.className
            storage = screenDisplay.textContent
            display = ''
            console.log('this display' + display)
            console.log('this storage' + storage)
            console.log(userOperation)
        }
        else {
            storage = screenDisplay.textContent;
            display = ''
            userOperation = operatorSelect.className
            console.log('this display2' + display)
            console.log('this storage2' + storage)
        }
        checkEqual = 0
    });
}
// Calculates two numbers
function calc(){
    if (display == 0)
        return screenDisplay.textContent = 0
    if (userOperation == 'add') 
        add(Number(storage),Number(display));
    if (userOperation == 'subtract') 
        subtract(Number(storage),Number(display));
    if (userOperation == 'divide') 
        divide(Number(storage),Number(display));
    if (userOperation == 'multiply') 
        multiply(Number(storage),Number(display));
    
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
        console.log('this displayyy' + display)
        console.log('this storageee' + storage)
        checkEqual = 1
    }

})


