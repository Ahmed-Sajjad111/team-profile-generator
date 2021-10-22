const { expect, test } = require("@jest/globals")
const Manager = require("../lib/Manager")

test("creating manager object", () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");
})

test("getting office number", () => {
    const officeNumber = 1234567890

    const manager = new Manager("Ahmed", 12345,"ahmed@ahmed.com", officeNumber)

    expect(manager.getOfficeNumber()).toBe(officeNumber)
})

test("getting role value", () => {
    const managerRole = "Manager"

    const manager = new Manager("Ahmed", 12345, "ahmed@ahmed.com",1234567890)

    expect(manager.getRole()).toBe(managerRole)
})