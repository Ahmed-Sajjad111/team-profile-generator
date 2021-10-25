const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const renderHTML = require('./src/page-template')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const outputDirectory = path.resolve(__dirname,'dist')
const outputPath = path.join(outputDirectory,'index.html')

//array to hold all employees created
const allEmployees = []

//ask user for information about manager
const promptManager = () => {
  inquirer.prompt(
    [
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required)",
            validate: managerInput => {
                if (managerInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's ID? (Required)",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's ID!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's email!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number? (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's office number!");
                  return false;
                }
              }
        }
      ])
      .then((data) => {
        const managerName = data.managerName
        const managerId = data.managerID
        const managerEmail = data.managerEmail
        const managerOffice = data.managerOfficeNumber

        // create new manager object
        const manager = new Manager(managerName, managerId, managerEmail, managerOffice)

        //push newly created manager to array
        allEmployees.push(manager)

        //ask user if they want to add more employees
        addEmployee()
      })
}

//ask user for information about engineer
const promptEngineer = () => {
  inquirer.prompt(
    [
      {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name? (Required)",
          validate: engineerInput => {
              if (engineerInput) {
                return true;
              } else {
                console.log("Please enter the team engineer's name!");
                return false;
              }
            }
      },
      {
          type: 'input',
          name: 'engineerID',
          message: "What is the engineer's ID? (Required)",
          validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter the team engineer's ID!");
                return false;
              }
            }
      },
      {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the engineer's email? (Required)",
          validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter the team engineer's email!");
                return false;
              }
            }
      },
      {
          type: 'input',
          name: 'engineerGithub',
          message: "What is the engineer's GitHub Username? (Required)",
          validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log("Please enter the engineer's GitHub Username!");
                return false;
              }
            }
      }
    ])
    .then((data) => {
      const engineerName = data.engineerName
      const engineerId = data.engineerID
      const engineerEmail = data.engineerEmail
      const engineerGitHub = data.engineerGithub

      // create new engineer object
      const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub)

      //push newly created engineer to array
      allEmployees.push(engineer)

      //ask user if they want to add more employees
      addEmployee()
    })
}

//ask user for information about intern
const promptIntern = () => {
  inquirer.prompt(
    [
      {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name? (Required)",
          validate: internInput => {
              if (internInput) {
                return true;
              } else {
                console.log("Please enter the team intern's name!");
                return false;
              }
            }
      },
      {
          type: 'input',
          name: 'internID',
          message: "What is the intern's ID? (Required)",
          validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter the team intern's ID!");
                return false;
              }
            }
      },
      {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email? (Required)",
          validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter the team intern's email!");
                return false;
              }
            }
      },
      {
          type: 'input',
          name: 'internSchool',
          message: "What is the intern's school? (Required)",
          validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter the intern's school!");
                return false;
              }
            }
      }
    ])
    .then((data) => {
      const internName = data.internName
      const internId = data.internID
      const internEmail = data.internEmail
      const internSchool = data.internSchool

      // create new intern object
      const intern = new Intern(internName, internId, internEmail, internSchool)

      //push newly created intern to array
      allEmployees.push(intern)

      //ask user if they want to add more employees
      addEmployee()
    })
}

//ask user if they want to add more employees
const addEmployee = () => {
  inquirer.prompt({
      type: 'list',
      name: 'addEmployee',
      message: 'Select which employee you wish to add. If none, click none.',
      choices:[
        'Engineer',
        'Intern',
        'None'
      ]
    })
    .then((data) => {
      switch (data.addEmployee) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        case "None":
          console.log("Generating your team")
          renderTeam();
          break;
      }
    })
}

const renderTeam = () => {
  fs.writeFileSync(outputPath,renderHTML(allEmployees),'utf-8')
}

promptManager()