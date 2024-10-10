interface Teacher {
  readonly firstName: string; // Can only be modified at initialization
  readonly lastName: string;  // Can only be modified at initialization
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional attribute
  location: string;           // Always defined
  [key: string]: any;         // Allows adding other attributes dynamically
}


interface Directors extends Teacher {
    numberOfReports: number;
}