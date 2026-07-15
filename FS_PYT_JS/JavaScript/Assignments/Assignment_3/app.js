let userName = prompt("Enter your name : ");
let userAge = prompt("Enter your age : ");
alert("Welcome " + userName);
console.log("User's name : ", userName);
console.log("User's age : ", userAge);

function checkGrade(marks){
    if(marks>=80){
        console.log("Your grade : A");
    }
    else if(marks>=70){
        console.log("Your Grade : B");
    }
    else if(marks>=60){
        console.log("Your Grade : C");
    }
    else if(marks>=50){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}
checkGrade(12);
checkGrade(25);
checkGrade(100);
checkGrade(79);
checkGrade(67);

for(let i = 1; i<=50; i++){
    if(i%2===0){
        console.log(i);
    }
}

let j = 10;
while(j>=1){
    console.log(j);
    j--;
}

let arrOfNames = ["Ali", "Ahmed", "Sara", "Zain"];
arrOfNames.push("Fatima");
console.log("Added Fatima in the end : ", arrOfNames);
arrOfNames.shift();
console.log("Removed the first element.", arrOfNames);
arrOfNames.unshift("Usman");
console.log("Added Usman at the beginning : ", arrOfNames);
arrOfNames.pop();
console.log("Removed the last element ", arrOfNames);
console.log("Final Array : ", arrOfNames);
