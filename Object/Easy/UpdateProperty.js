/* Question 3: Update Existing Property
concept:property modification
Given:
const employee = {
    name: "John",
    salary: 50000
};
Update salary to:60000*/
const employee = {
    name: "John",
    salary: 50000
};
console.log("======Before Update=====");
console.log(employee);
console.log("=======After Update=======");
employee.salary = 60000;
console.log(employee);
