const { expect, test } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("creating employee object", () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
})

test("getting name value", () => {
    const employeeName = "Ahmed";

    const employee = new Employee(employeeName);

    expect(employee.getName()).toBe(employeeName);
})

test("getting id value", () => {
    const employeeId = "12345";

    const employee = new Employee("Ahmed", employeeId);

    expect(employee.getId()).toBe(employeeId);
})

test("getting email value", () => {
    const employeeEmail = "ahmed@ahmed.com";

    const employee = new Employee("Ahmed", 12345, employeeEmail);

    expect(employee.getEmail()).toBe(employeeEmail)
})

test("getting role value", () => {
    const employeeRole = "Employee";

    const employee = new Employee("Ahmed", 12345, "ahmed@ahmed.com")

    expect(employee.getRole()).toBe(employeeRole)
})