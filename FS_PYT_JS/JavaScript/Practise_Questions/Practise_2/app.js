//1. Check if a number is divisible by both 3 and 5.
let numQ1 = 15;
if(numQ1%3===0 && numQ1%5===0){
    console.log(`The number ${numQ1} is divisible by both 3 and 5.`);
}
else{
    console.log(`The number ${numQ1} is not divisible by both 3 and 5.`);
}

//2. Create a function that checks if a number is positive.
let posNegCheck = (num)=>{
    if(num>0) return `The number ${num} is positive.`;
    else if(num<0) return `The number ${num} is negative.`;
    else if(num===0) return `The number is zero.`;
}
console.log(posNegCheck(5));
console.log(posNegCheck(-3));
console.log(posNegCheck(0));

//3. Find the average of numbers in an array.
let arrayQ3 = [7, 11, 21, 4, 43, 78, 96, 45, 65, 41, 20, 31];
let sumOfArrayQ3 = 0;
for(let i = 0; i<arrayQ3.length; i++){
    sumOfArrayQ3 += arrayQ3[i];
}
let averageOfArrayQ3 = sumOfArrayQ3/arrayQ3.length;
console.log(`The average of array of Question 3 is ${averageOfArrayQ3}`);

//4. Print numbers from 20 to 1.
for(let j = 20; j>0; j--){
    console.log(j);
}

//5. Count how many odd numbers exist in an array.
let arrayQ5 = [7, 11, 21, 4, 43, 78, 96, 45, 65, 41, 20, 31];
let oddCounterQ5 = 0;
for(let k = 0; k<arrayQ5.length; k++){
    if(arrayQ5[k]%2!==0){
        oddCounterQ5++;
    }
}
console.log(oddCounterQ5);

//6. Find the second largest number in an array.
//7. Print the square of numbers from 1 to 10.
for(let a= 1; a<11; a++){
    console.log(`${a} x ${a} = ${a**2}`);
}

//8. Create a function that returns the larger of two numbers.
let largerOfTwoNumbers = (num1_8, num2_8)=>{
    if(num1_8>num2_8){
        console.log(`${num1_8} is larger.`);
    }
    else if(num1_8<num2_8){
        console.log(`${num2_8} is larger.`);
    }
    else{
        console.log(`Neither is larger`);
    }
}
largerOfTwoNumbers(5, 9);

//9. Count how many numbers from 1 to 100 are divisible by 5.
let counter11 = 0;
for(let i = 1 ; i<101; i++){
    if(i%5===0){
        counter11++;
    }
}
console.log(counter11);

//10. Check whether a character is a vowel or consonant.
let character = 'a';
if((character==='a'||character==='A')||(character==='e'||character==='E')||(character==='i'||character==='I')||(character==='o'||character==='O')||(character==='u'||character==='U')){
    console.log(`${character} is a vowel`);
}
else{
    console.log(`${character} is a constant`);
}
