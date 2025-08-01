interface Teacher {
  readonly firstName: string; 
  readonly lastName: string;  
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;           
  [key: string]: any;         
}


interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
   (first: string, last: string): string
}


const printTeacher: printTeacherFunction = (firstName, lastName) =>  {
    return `${firstName[0]}. ${lastName[0]}`
}


console.log(printTeacher("John", "Doe"));