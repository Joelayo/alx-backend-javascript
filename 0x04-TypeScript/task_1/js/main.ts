interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Write a function printTeacher
// Write an interface for the function named printTeacherFunction.

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};


// The constructor of the class should be described through an Interface
// The class should be described through an Interface

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');