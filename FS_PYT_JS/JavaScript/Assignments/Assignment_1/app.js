console.log("Welcome to Calculator !!!!")
console.log(`You can perform following : 
    +(addition), 
    -(subtraction), 
    *(multiplication), 
    /(division), 
    **(power), 
    %(modulus)`)


// Please enter the desired numbers(any two) and the operator in the following 3 lines to perform your calculation
let num1 = 2;
let num2 = 5;
let operator = "*";

if(operator==='+'){
    let result = num1 + num2;
    console.log('The result of the calculation [ ', num1,' ', operator,' ', num2, ' =', result, ' ]')
} else if(operator==='-'){
    let result = num1 - num2;
    console.log('The result of the calculation [ ', num1,' ', operator,' ', num2, ' =', result, ' ]')
} else if(operator==='*'){
    let result = num1 * num2;
    console.log('The result of the calculation [ ', num1,' ', operator,' ', num2, ' =', result, ' ]')
} else if(operator==='/'){
    let result = num1 / num2;
    console.log('The result of the calculation [ ', num1,' ', operator,' ', num2, ' =', result, ' ]')
} else if(operator==='**'){
    let result = num1 ** num2;
    console.log('The result of the calculation [ ', num1,' ', operator,' ', num2, ' =', result, ' ]')
} else if(operator==='%'){
    let result = num1 % num2;
    console.log('The result of the calculation [ ', num1,' ', operator,' ', num2, ' =', result, ' ]')
} else{console.log('Please add a valid operator. Thank You!')}