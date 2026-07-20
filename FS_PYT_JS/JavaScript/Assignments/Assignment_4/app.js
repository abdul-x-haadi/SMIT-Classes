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

// ### Task 3 – Display Data on the Web Page
// * Create a <div> in your HTML file with an id.
// * Access that <div> from your JavaScript file.
// * Retrieve the saved data from *localStorage* using JSON.parse().
// * Use *forEach()* to loop through the array and render each user's information inside the <div> using innerHTML.

let userInformation = document.getElementById("users-information");
personss.forEach((user, index)=>{
    userInformation.innerHTML += `
    <h3>Users Information ${index+1} : </h3>
    <p>Full Name : ${user.Person_Full_Name}</p>
    <p>Age : ${user.Person_Age}</p>
    <p>City : ${user.Person_City}</p>
    <p>Profession : ${user.Person_Profession}</p>
    <p>Email : ${user.Person_Email}</p>
    <p>Phone Number : ${user.Person_Phone_number}</p>
    `
})