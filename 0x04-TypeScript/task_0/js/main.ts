// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two instances of Student
  const student1: Student = {
    firstName: "Esianyo",
    lastName: "Dzisenu",
    age: 25,
    location: "Accra"
  };
  
  const student2: Student = {
    firstName: "Esianyo",
    lastName: "Dzisenu",
    age: 27,
    location: "New York"
  };
  
  // Array containing the students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table and append rows for each student
  const table = document.createElement('table');
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = `${student.firstName} ${student.lastName}`;
    cell2.textContent = student.location;
  });
  
  document.body.appendChild(table);
  