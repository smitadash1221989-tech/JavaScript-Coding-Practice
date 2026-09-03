/* Question 5: Check Property Exists
Given:
const employee = {
    name: "John",
    salary: 50000
};
Check:name
Expected:true
Check:email
Expected:false
Concepts: in operator*/

const employee={
    name :'John',
    salary:50000
};
console.log("name" in employee);
console.log("email" in employee);