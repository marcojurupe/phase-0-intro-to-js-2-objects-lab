// Write your solution in this file!
const employee = {name:'Pedro Jimenez', streetAddress:'4759 Alamo Court'}

function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee = {...employee,name: 'Sam', streetAddress: '11 Broadway'};
return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee2 = {...employee[key]};
    delete newEmployee2[key];
    return newEmployee2;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete  employee[key];
    return employee;
}

