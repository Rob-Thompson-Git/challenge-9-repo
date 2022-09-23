// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),(err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the project title name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'features',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'features',
    },
]).then((answers) => {
    writeToFile('README.md', answers);
  })

}

// Function call to initialize app
init();
