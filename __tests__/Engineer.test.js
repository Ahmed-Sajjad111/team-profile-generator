const { expect, test } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("creating engineer object",() => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");
})

test("adding github account", () => {
    const githubAccount = "Ahmed-Sajjad111"

    const engineer = new Engineer("Ahmed", 12345, "ahmed@ahmed.com", githubAccount)

    expect(engineer.github).toBe(githubAccount)
})

test("getting github", () => {
    const githubAccount = "Ahmed-Sajjad111"

    const engineer = new Engineer("Ahmed", 12345, "ahmed@ahmed.com", githubAccount)

    expect(engineer.getGitHub()).toBe(githubAccount)
})


test("getting role value", () => {
    const engineerRole = "Engineer"
    
    const engineer = new Engineer("Ahmed", 12345, "ahmed@ahmed.com","Ahmed-Sajjad111")
    
    expect(engineer.getRole()).toBe(engineerRole)
})
