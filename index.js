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
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'If your product has a lot of features, list them',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username and your email address?',
        name: 'questions',
    },

]).then((answers) => {
    writeToFile('README.md', answers);
  })

}

// Function call to initialize app
init();
