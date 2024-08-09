// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project Title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the instructions for use?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What´s your name?',
        name: 'credits'
        
    },
    {
        type: 'input',
        message: 'Whats your Github account?',
        name: 'github'
        
    },
    {
        type: 'input',
        message: 'Whats your license?',
        name: 'license'
    },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile('README', data,(err)=>{
        err? console.error(err) : console.log("success");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer .prompt(questions)
    .then(({title, description, installation, usage, credits, github, license})=>{
        console.log('read me built successfully!');
        const readme=`
        # ${title}

## Description
${description}

## Table of contents
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Demo

![Gif demonstrating functionality](./assets/gifDemonstration.gif)

## Installation
${installation}

## Usage
${usage}


## Credits
${credits}
${github}


## License
${license}      
        `
        writeToFile('README.md', readme)
    })
}

// Function call to initialize app
init();
