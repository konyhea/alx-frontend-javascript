

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentOne: Student = {
    firstName: 'Jaime',
    lastName: 'Oko',
    age: 20,
    location: 'Abuja',
  };
  
  const studentTwo: Student = {
    firstName: 'Peter',
    lastName: 'Obi',
    age: 10,
    location: 'Lagos',
  };
  
  const studentsList: Student[] = [studentOne, studentTwo];
  

  const table = document.createElement('table');
  table.border = '1';
  table.style.borderCollapse = 'collapse';
  
  const header = table.insertRow();
  const th1 = document.createElement('th');
  const th2 = document.createElement('th');
  th1.innerText = 'First Name';
  th2.innerText = 'Location';
  header.appendChild(th1);
  header.appendChild(th2);
  
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerText = student.firstName;
    cell2.innerText = student.location;
  });
  
  document.body.appendChild(table);
  