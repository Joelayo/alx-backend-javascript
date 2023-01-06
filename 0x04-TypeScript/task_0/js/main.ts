// Define the interface for a student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Chicago"
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Create a function that generates a row for a student
  function createRow(student: Student) {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    return row;
  }
  
  // Get a reference to the table element
  const table = document.getElementById("students-table");
  
  // Iterate over the students array and add a new row to the table for each student
  studentsList.forEach(student => {
    table.appendChild(createRow(student));
  });