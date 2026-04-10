function calculateSalary(employee) {
    if (employee.type === "permanent") {
        return employee.basicPay + employee.allowances - employee.deductions;
    }
    else if (employee.type === "contract") {
        return employee.hourlyRate * employee.hoursWorked;
    }
    else if (employee.type === "intern") {
        return employee.stipend;
    }
    else {
        return 0;
    }
}
var staff = {
    type: "permanent",
    basicPay: 30000,
    allowances: 5000,
    deductions: 2000,
};
var contractor = {
    type: "contract",
    hourlyRate: 500,
    hoursWorked: 40,
};
var intern = {
    type: "intern",
    stipend: 8000,
};
console.log("Permanent Staff Salary:", calculateSalary(staff));
console.log("Contract Employee Salary:", calculateSalary(contractor));
console.log("Intern Salary:", calculateSalary(intern));
