// Packages needed for this application :)
const inquirer = require('inquirer'); // Nodejs Inquirer Library
const fs = require('fs'); // Nodejs library for reading and writing files
const genMrkDwn = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {
        type:'input',
        message:`What is your project's name? `,
        name:'title',
    },
    {
        type:'input',
        message:'Please write a short description of your project. ',
        name:'description',
    },
    {
        type:'input',
        message:'What command should be run to install dependencies? ',
        name:'installation',
    },
    {
        type:'input',
        message:'What does the user need to know about using the repo? ',
        name:'usage',
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to the repo? ',
        name:'contribution',
    },
    {
        type:'input',
        message:'What command should be run to run tests? ',
        name:'test',
    },
    {
        type:'list',
        message:'What kind of license should your project have? ',
        name:'license',
        choices: [
            'The MIT License',
            'Apache 2.0 License',
            'GNU GPL v3',
            'BSD 3-Clause License',
            'Eclipse Public License 1.0',
            'Mozilla Public License 2.0',
            'The Unlicense',   
          ],
    },
    {
        type:'input',
        message:'What is your GitHub username? ',
        name:'github',
    },
    {
        type:'input',
        message:'What is your email address? ',
        name:'email',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName,
        genMrkDwn.generateMarkdown(data),
        (error) => error ? console.log(error) : console.log('Generating README...')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const fileName = `README.md`;
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
