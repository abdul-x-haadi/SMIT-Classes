let students = JSON.parse(localStorage.getItem("students")) || [];
function addStudent(){
    let studentName = prompt("Add Your Name : ");
    let studentRoll = prompt("Add your roll number : ");
    let studentAge = prompt("Add your age : ");
    let studentCourse = prompt("Add your course : ");
    let studentEmail = prompt("Add your Email : ");

    if(!studentName || !studentAge || !studentRoll || !studentCourse || !studentEmail){
        alert("Kindly validate all the fields ");
    }
    else{
        let newStudent = {
            student_Name : studentName,
            student_Roll_Number : studentRoll,
            student_Age : studentAge,
            student_Course : studentCourse,
            student_Email : studentEmail
        }
        students.push(newStudent);
        localStorage.setItem("students", JSON.stringify(students));
        displayStudents();
        updateCounter();
        alert(studentName + " is added successfully.");
    }
}

let studentInformation = document.getElementById("user-information");
function displayStudents(){
    studentInformation.innerHTML = "";

    students.forEach((user, index)=>{
        studentInformation.innerHTML += `
                <tr>
            <td>${user.student_Name}</td>
            <td>${user.student_Roll_Number}</td>
            <td>${user.student_Age}</td>
            <td>${user.student_Course}</td>
            <td>${user.student_Email}</td>
            <td>
                <button onClick="editStudent(${index})">Edit</button>
                <button onClick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`
    })

    if(students.length === 0){
        studentInformation.innerHTML = `
            <tr>
                <td colspan="6">
                    No Students Found
                </td>
            </tr>
        `;
        return;
    }
}

function deleteStudent(index){
    let deleteConfirm = prompt("Are you sure you want to delete? (y/n)")
    if(deleteConfirm==="y" || deleteConfirm==="Y"){
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
    }
    displayStudents();
    updateCounter();
}

function editStudent(index){

    let student = students[index];
    let newName = prompt("Enter Name:", student.student_Name);
    let newRoll = prompt("Enter Roll Number:", student.student_Roll_Number);
    let newAge = prompt("Enter Age:", student.student_Age);
    let newCourse = prompt("Enter Course:", student.student_Course);
    let newEmail = prompt("Enter Email:", student.student_Email);
    students[index] = {
        student_Name: newName,
        student_Roll_Number: newRoll,
        student_Age: newAge,
        student_Course: newCourse,
        student_Email: newEmail
    };

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
} 

function searchStudent(){

    let searchValue = prompt("Enter Student Name, Roll Number, or Course:");

    if(!searchValue){
        return;
    }

    searchValue = searchValue.toLowerCase();

    let foundStudents = students.filter((user)=>{

        return (
            user.student_Name.toLowerCase().includes(searchValue) ||
            user.student_Roll_Number.toLowerCase().includes(searchValue) ||
            user.student_Course.toLowerCase().includes(searchValue)
        );

    });


    studentInformation.innerHTML = "";

    foundStudents.forEach((user, index)=>{

        studentInformation.innerHTML += `
        <tr>
            <td>${user.student_Name}</td>
            <td>${user.student_Roll_Number}</td>
            <td>${user.student_Age}</td>
            <td>${user.student_Course}</td>
            <td>${user.student_Email}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });


    if(foundStudents.length === 0){
        alert("No student found!");
    }
}

function updateCounter(){
    document.getElementById("student-counter").innerHTML = 
    `Total Students: ${students.length}`;
}

let sortAToZ = true;

function sortStudents(){

    if(sortAToZ){

        students.sort((a, b) => {
            if(a.student_Name > b.student_Name){
                return 1;
            }
            else{
                return -1
            }
        });

        document.getElementById("sort-btn").innerHTML = "Sort Z-A";
        sortAToZ = false;

    }
    else{

        students.sort((a, b) => {
            if(a.student_Name < b.student_Name){
                return 1;
            }
            else{
                return -1;
            }
        });

        document.getElementById("sort-btn").innerHTML = "Sort A-Z";
        sortAToZ = true;

    }

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

} 

let darkMode = false;

function changeTheme(){

    let body = document.body;
    let themeButton = document.getElementById("theme-btn");

    if(darkMode === false){

        body.classList.add("dark-mode");
        themeButton.innerHTML = "Light Mode";

        darkMode = true;

    }
    else{

        body.classList.remove("dark-mode");
        themeButton.innerHTML = "Dark Mode";

        darkMode = false;

    }
}

updateCounter();
displayStudents();