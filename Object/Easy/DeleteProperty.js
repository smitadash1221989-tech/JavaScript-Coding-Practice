/* Given:
const employee = {
    name: "John",
    salary: 50000,
    department: "QA"
};
Remove:department*/

const employee ={
    name: "John",
    salary: 50000,
    department: "QA"
};
console.log("======Before Delete=======");
console.log(employee);
console.log("======After Delete========");
delete employee.department;
console.log(employee);
//verify object property is deleted
console.log(employee.department);

