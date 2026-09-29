function calculate() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marks = Number(document.getElementById("marks").value);
    let grade;

    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";
    else if (marks >= 50) grade = "D";
    else grade = "F";

    document.getElementById("result").innerHTML =
        `<h2>${name}</h2>
         <p>Roll No: ${roll}</p>
         <p>Marks: ${marks}</p>
         <p>Grade: <b>${grade}</b></p>`;
}