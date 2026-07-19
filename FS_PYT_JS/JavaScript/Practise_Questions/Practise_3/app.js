//1. Print all elements of an array in reverse order.
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let reversedArr1 = [];
for(let i = arr1.length-1; i>=0; i--){
    reversedArr1.push(arr1[i]);
}
console.log(`The reversed Array is : ${reversedArr1}`);

//2. Find the product of all elements in an array.
let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let productOfArr2 = 1;
for(let i  = 0; i<arr2.length; i++){
    productOfArr2 *= arr2[i];
}
console.log(`The product of Array is : ${productOfArr2}`);

//3. Create a function that counts array elements.
let elementsCounter = (arr)=>{
    return (`There are ${arr.length} elements in the array.`)
}
console.log(elementsCounter([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

//4. Print all even numbers from 1 to 100.
for(let i = 1; i<101; i++){
    if(i%2===0){
        console.log(i);
    }
}

//5. Find the difference between the largest and smallest array elements.
let arr5 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let smallestArr5 = arr5[0];
let largestArr5 = arr5[0];
for(let i = 0; i<arr5.length; i++){
    if(arr5[i]>largestArr5){
        largestArr5 = arr5[i];
    }
    else if(arr5[i]<smallestArr5){
        smallestArr5 = arr5[i];
    }
}
console.log(`The difference between smallest and largest number is ${largestArr5-smallestArr5}`);

//6. Use a switch statement to print the month name from a number (1–12).
let monthNumber = 9;
switch (monthNumber) {
    case (1):
        console.log("Janurary");
        break;
    case (2):
        console.log("February");
        break;
    case (3):
        console.log("March");
        break;
    case (4):
        console.log("April");
        break;
    case (5):
        console.log("May");
        break;
    case (6):
        console.log("June");
        break;
    case (7):
        console.log("July");
        break;
    case (8):
        console.log("August");
        break;
    case (9):
        console.log("September");
        break;
    case (10):
        console.log("October");
        break;
    case (11):
        console.log("November");
        break;
    case (12):
        console.log("December");
        break;
    default:
        break;
}

//7. Count the number of digits in a number.
let num7 = 156165;
let stringifiedNum7 = JSON.stringify(num7);
console.log((`The number of digits in number are : ${stringifiedNum7.length}`));


//8. Find the sum of numbers from 1 to n.
function sumOnetoN(n){
    let sumToN = 0;
    for(let i = 1; i<=n; i++){
        sumTON += i;
    }
    return (`The sum from 1 to ${n} is : ${sumToN}`)
}

//9. Check whether a given number exists in an array.
let searcher = 12;
let arr9 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let verification;
for(let i = 0; i<arr9.length; i++){
    if(searcher===arr9[i]){
        verification = (`Yes, The number exists`);
    }
    else{
        verification = (`No, The number do not exists`);
    }
}
console.log(verification);

//10. Create a function that returns the cube of a number.
function cube(n){
    console.log(n**3);
}

//11. Print the multiplication tables from 1 to 5.
for(let i = 1 ;i<=10; i++){
    console.log(`1 x ${i} = ${1*i}`);
}
for(let i = 1 ;i<=10; i++){
    console.log(`2 x ${i} = ${1*i}`);
}
for(let i = 1 ;i<=10; i++){
    console.log(`3 x ${i} = ${1*i}`);
}
for(let i = 1 ;i<=10; i++){
    console.log(`4 x ${i} = ${1*i}`);
}
for(let i = 1 ;i<=10; i++){
    console.log(`5 x ${i} = ${1*i}`);
}

//12. Reverse the digits of a number.
let number13 =123456;
let stringifiedNumber13 = JSON.stringify(number13);
let reversedNumber13 = "";
for(let i = stringifiedNumber13.length-1; i>=0; i--){
    reversedNumber13 += stringifiedNumber13[i];
}
console.log(Number(reversedNumber13));
