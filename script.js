const add = (add1,add2) => add1+add2;
const subtract = (sub1,sub2) => sub1 - sub2;
const multiply = (mult1,mult2) => mult1 * mult2;
const divide = (div1,div2) => div1/div2;


function operate(operator,num1,num2){
    return operator(num1,num2)
} 