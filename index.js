const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const allEmployees = []

const promptManager = [
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
]

function init() {
    inquirer.prompt(promptManager).then((managerData) => {
        
    })
}