//1. Print your name using a variable.
let name = "Abdul Hadi";
console.log(`My name is ${name}`);

//2. Take a number and print whether it is even or odd.
let num1 = Number(prompt("Enter a number"));
if(num1%2===0){
    console.log(`${num1} is an even number.`);
}
else{
    console.log(`${num1} is an odd number.`);
}

//3. Find the sum of all numbers in an array.
let array1 = [12, 151, 45, 6,18, 16, 79, 56, 79];
let sumOfArray1 = 0;
for(let i = 0; i<array1.length; i++){
    sumOfArray1 += array1[i];
}
console.log(`The sum of array is ${sumOfArray1}`);

//4. Print numbers from 1 to 20.
for(let j = 1; j<21; j++){
    console.log(j);
}

//5. Create a function that returns the square of a number.
function getItSquared(num){
    return (`The square of the number ${num} is : ${num**2}`)
}
console.log(getItSquared(5));

//6. Find the largest number in an array.
let array2 = [12, 151, 45, 6,18, 16, 79, 56, 79];
let largestNumOfArray2 = array2[0];
for(let k = 0; k<array2.length; k++){
    if(array2[k]>largestNumOfArray2){
        largestNumOfArray2 = array2[k];
    }
}
console.log(`The largest number in Array 2 is : ${largestNumOfArray2}`);

//7. Take two numbers and print the greater one.
let q7num1 = 15;
let q7num2 = -46;
if(q7num1>q7num2){
    console.log(`The greater number is : ${q7num1}`);
}
else if(q7num1<q7num2){
    console.log(`The greater number is : ${q7num2}`);
}
else{
    console.log(`Both the numbers are equal`);
}

//8. Print the multiplication table of 7.
for(let i = 1; i<=10; i++){
    console.log(`${i} x 7 = ${i*7}`);
}

// 9.Count the number of even elements in an array.
let arrayForQus9 = [100, 56, 49, 85, 82, 81, 63, 75, 64, 92,70];
let counterQus9 = 0;
for(let a = 0; a<arrayForQus9.length; a++){
    if(arrayForQus9[0]%2===0){
        counterQus9++;
    }
}
console.log(`There are ${counterQus9} even numbers in the array.`);

// Take a person's age and determine if they can vote.
let presonAge = Number(prompt("Enter Your age"));
if(presonAge>=18){
    console.log("You ar eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

// Create a function that returns the sum of two numbers.
function sumOfTwo(number1, number2){
    return (`The sum of ${number1} & ${number2} = ${number1+number2}`);
}
console.log(sumOfTwo(45, 69));

// Print all odd numbers from 1 to 50.
for(let b = 1; b<51; b++){
    if(b%2!==0){
        console.log(b);
    }
}

// Find the smallest number in an array.
let arrayForQus13 = [100, 56, 49, 85, 82, 81, 63, 75, 64, 92,70];
let smallestNumOfArray13 = arrayForQus13[0];
for(let c = 0; c<arrayForQus13.length; c++){
    if(arrayForQus13[c]<smallestNumOfArray13){
        smallestNumOfArray13 = arrayForQus13[c];
    }
} 
console.log(`The smallest number of Array 13 is : ${smallestNumOfArray13}`);

// Print the first and last elements of an array.
let arrayForQus14 = [100, 56, 49, 85, 82, 81, 63, 75, 64, 92,70];
console.log(`The first element of the array is : ${arrayForQus14[0]}`);
console.log(`The last element of the array is : ${arrayForQus14[arrayForQus14.length-1]}`);

// Reverse the elements of an array using a loop.
let arrayForQus15 = [100, 56, 49, 85, 82, 81, 63, 75, 64, 92,70];
let reversedArrayForQus15 = [];
for(let d = arrayForQus15.length-1; d>=0; d--){
    reversedArrayForQus15.push(arrayForQus15[d]);
}
console.log(reversedArrayForQus15);     