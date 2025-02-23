// object type
const person: Person = {
  // isAdmin? means if it is there it would be a boolean (Optional)
  name: "adam",
  age: 15,
};

/* we have to make sure the field that we defiened the type are found in the object  */
const anotherPerson: Person = {
  name: "Tycoon",
  age: 25,
};
//we can also create an universal type to get rid of the repetition of the type.

type Person = { name: string; age: number; isAdmin?: boolean }; // first way

/**
interface Person {
  name: string;
  age: number;
  isAdmin?: boolean;
}

interface personWithRole extends Person {
  role: string;
}

const person1: personWithRole = {
  name: "tycoon",
  age: 30,
  role: "student",
}; */
// in interface we can create two interfaces of same name one to update the other. which can be good and bad at the same time.
