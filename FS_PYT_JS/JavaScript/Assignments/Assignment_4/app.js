// Task 1 – Collect User Information
// Use *6 prompt()* dialogs to collect user information. For example:
// * Full Name
// * Age
// * City
// * Profession (Student/Employee)
// * Email
// * Phone Number

let fullName = prompt("Enter your full name : ");
let age = Number(prompt("Enter you age :"));
let city = prompt("Enter your city : ");
let profession = prompt("Enter your profession (student/employee) :");
let email = prompt("Enter your email :");
let phoneNumber = prompt("Enter your phone number :");

// -----------------------------------------------------------------

// ### Task 2 – Store Data
// * Create an *object* using the data collected from the prompts.
// * Store that object inside an *array of objects*.
// * Save the array in *localStorage* using JSON.stringify().

let personss = JSON.parse(localStorage.getItem("users")) || [];
let person = {
    Person_Full_Name :  fullName,
    Person_Age : age,
    Person_City : city,
    Person_Profession : profession,
    Person_Email : email,
    Person_Phone_number : phoneNumber
};
personss.push(person);
localStorage.setItem("users", JSON.stringify(personss));
console.log(personss);

// -----------------------------------------------------------------

