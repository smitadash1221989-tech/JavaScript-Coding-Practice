//Question 1: Create and Access Properties
//Create the following object:
//const employee = {
  //  name: "John",
    //salary: 50000,
    //department: "QA"
//};
//create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  city: "New York"
};
//Access Properties:Using dot notation:
console.log(person.firstName);
console.log(person.age);
//Access Properties:using brack notation
console.log(person['firstName']);
//Store the last name in a variable and print it.
const lastname = person.lastName;
console.log(lastname);