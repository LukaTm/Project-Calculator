
const screenDisplay = document.querySelector('.display')

// Math function
const add = (add1,add2) => add1+add2;
const subtract = (sub1,sub2) => sub1 - sub2;
const multiply = (mult1,mult2) => mult1 * mult2;
const divide = (div1,div2) => div1/div2;

function operate(operator,num1,num2){
    return operator(num1,num2)
} 

//
let display = ''
function displayNum(num){
    display += num
    console.log(screenDisplay)
    screenDisplay.textContent = display
}

const numList = ['zero','one','two','three','four','five','six','seven','eight','nine']
for (x= 0;x< numList.length;x++){
    let one = document.querySelector(`.${numList[x]}`);
    one.addEventListener("click", () => displayNum(one.textContent));
}
