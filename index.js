const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const allEmployees = []

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
            name: 'managerPhoneNumber',
            message: "What is the team manager's phone number? (Required)",
            validate: phoneNumberInput => {
                if (phoneNumberInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's phone number!");
                  return false;
                }
              }
        }
      ])
      .then((data) => {
        //do you wanna add another employee
        addEmployee()
        //console.log the final dat returned from all the functions 
        //on each index getrole() and dynamically generate each object based on what is returned
      })
}

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
    ]
  )
}

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
    ]
  )
}

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
          break;
      }
    })
}

// function init() {
//     inquirer.prompt(promptManager).then((data) => {
        
//     })
// }

promptManager()