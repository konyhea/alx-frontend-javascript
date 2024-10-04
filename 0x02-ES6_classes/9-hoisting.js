// Define the HolbertonClass
export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // Store year in a private attribute
    this._location = location; // Store location in a private attribute
  }

  get year() {
    return this._year; // Getter for year
  }

  get location() {
    return this._location; // Getter for location
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define the StudentHolberton class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) { // Corrected constructor parameter
    this._firstName = firstName; // Store first name in a private attribute
    this._lastName = lastName; // Store last name in a private attribute
    this._holbertonClass = holbertonClass; // Store reference to HolbertonClass instance
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`; // Getter for full name
  }

  get holbertonClass() {
    return this._holbertonClass; // Getter for holbertonClass
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // Corrected reference to _holbertonClass
  }
}

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Create a list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
