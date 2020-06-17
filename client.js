const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// write function that takes employee object
// returns new object

function logEmployees(employees) {
  for (employee of employees) {
    console.log(employee);
  }
}
//logEmployees(employees);


let bonusEmployees = [];

// create function that loops through employees
// and sends each one to another funciton
// processEmploeeInfo
function createBonusEmployees() {
  for (let i = 0; i < employees.length; i++) {
    let newEmployee = processEmployeeInfo(employees[i]);
    console.log(newEmployee);
    bonusEmployees.push(newEmployee);
  }
}


function processEmployeeInfo(employee) {
  let bonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }
  return bonus;
}

createBonusEmployees();
//console.log(processEmployeeInfo())
// var results = bonusEmployees.filter(function (employee) { return employee.name === "green"; })

function findEmployee(bonusEmployees) {
  let result = employees.filter(function (bonusEmployees) {
    return bonusEmployees.name === employees.name;
  })
}

console.log(findEmployee(employees[0]));

function doThing() {
  for (let i = 0; i < employees.length; i++) {
    var result = employees.filter(function (employee) { return employee.name === "green"; })

    //if ()



  }
}
// console.log(employees);
