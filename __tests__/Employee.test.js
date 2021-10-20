const { expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("creating employee object", () => {
    const employee = new Employee()

    expect(typeof(employee)).toBe("object")

})