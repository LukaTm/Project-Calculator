const screenDisplay = document.querySelector('.display')


// Math function
const add = (add1,add2) => screenDisplay.textContent = add1+add2;
const subtract = (sub1,sub2) => screenDisplay.textContent = sub1 - sub2;
const multiply = (mult1,mult2) => screenDisplay.textContent = mult1 * mult2;
const divide = (div1,div2) => screenDisplay.textContent = div1/div2;

//
let storage = '' // 50
let storage2 = ''
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

// userOperation
// Buttons -+/*
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
            storage = display;
            display = ''
            userOperation = operatorSelect.className
            console.log('this display2' + display)
            console.log('this storage2' + storage)
        }
    });
}

function calc(){
    if (userOperation == 'add') 
        add(Number(storage),Number(display));
    if (userOperation == 'subtract') 
        subtract(Number(storage),Number(display));
    if (userOperation == 'divide') 
        divide(Number(storage),Number(display));
    if (userOperation == 'multiply') 
        multiply(Number(storage),Number(display));
    
}

const equalSign = document.querySelector('.equal')
equalSign.addEventListener("click", () => {
    calc()
})



