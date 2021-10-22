const { expect, test } = require("@jest/globals")
const Intern = require("../lib/Intern")

test("creating intern object", () => {
    const intern = new Intern()

    expect(typeof(intern)).toBe("object")
})

test("adding school", () => {
    const schoolName = "Ahmed's University"

    const intern = new Intern("Ahmed", 12345, "ahmed@ahmed.com", schoolName)

    expect(intern.school).toBe(schoolName)
})

test("getting school", () => {
    const schoolName = "Ahmed's University"

    const intern = new Intern("Ahmed", 12345, "ahmed@ahmed.com", schoolName)

    expect(intern.getSchool()).toBe(schoolName)
})

test("getting role value", () => {
    const internRole = "Intern"

    const intern = new Intern("Ahmed", 12345, "ahmed@ahmed.com","Ahmed's University")

    expect(intern.getRole()).toBe(internRole)
})