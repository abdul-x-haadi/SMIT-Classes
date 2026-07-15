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