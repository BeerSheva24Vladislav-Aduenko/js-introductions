function createPerson(id, name, age) {
  return id, name, age;
}

// const person1 = {id:123, name:"Vasya", age:25};
// const person2 = {id:124, name:"Sara", age:30};
const person1 = createPerson(123, "Vasya", 25);
const person2 = createPerson(124, "Sara", 30);

function Person(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
}

const person3 = new Person(123, "Yuri", 68);
let a = {};

let prototype = Object.getPrototypeOf(Person); 

function Employee(id, name, basicSalary) {
  this.id = id;
  this.name = name;
  this.basicSalary = basicSalary;

//   this.computeSalary = function () {
//     this.basicSalary;
//   };
}

Employee.prototype.computeSalary = function () { //// ???????????
  return this.basicSalary;
};

const employee1 = new Employee(123, "Vasya", 10000);
const salary = employee1.computeSalary();

const employee2 = {
  id: 123,
  name: "Vasya",
  basicSalary: 10000,
  computeSalary: function () {
    return this.basicSalary;
  },
};
const salary1 = employee2.computeSalary();


Employee.prototype.toString = function () {
  return `id: ${this.id}, name: ${this.name}, basicSalary: ${this.basicSalary}`;
};



const employees = [
    new Employee(1, "name1", 15000),
    new Employee(2, "name2", 15300),
    new Employee(3, "name3", 15000),
    new Employee(4, "name4", 15000),
    new Employee(5, "name5", 15000),
    new Employee(6, "name6", 15000),
]

const employeeStr = employees.join("; ");
const budget = employees.reduce((bud, e)=> bud + e.computeSalary(), 0);

console.log(budget);
console.log(employeeStr);
console.log(employees.toString());


let c;
