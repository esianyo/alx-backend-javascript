interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes with any value
}

const esianyo: Teacher = {
  firstName: 'Esianyo',
  lastName: 'Dzisenu',
  fullTimeEmployee: true,
  location: 'London',
  contract: false,
};

console.log(esianyo);
