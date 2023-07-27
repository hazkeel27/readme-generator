// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // Nodejs Inquirer Library
const fs = require('fs'); // Nodejs library for reading and writing files
const genMrkDwn = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type:'input',
    //     message:'What is your project's name? ',
    //     name:'title',
    // },
    // {
    //     type:'input',
    //     message:'Please write a short description of your project. ',
    //     name:'description',
    // },
    // {
    //     type:'input',
    //     message:'What command should be run to install dependencies? ',
    //     name:'installation',
    // },
    // {
    //     type:'input',
    //     message:'What does the user need to know about using the repo? ',
    //     name:'usage',
    // },
    // {
    //     type:'input',
    //     message:'What does the user need to know about contributing to the repo? ',
    //     name:'contribution',
    // },
    // {
    //     type:'input',
    //     message:'What command should be run to run tests? ',
    //     name:'test',
    // },
    // {
    //     type:'list',
    //     message:'What kind of license should your project have? ',
    //     name:'license',
    //     choices: [
    //         'MIT License',
    //         'Apache License 2.0',
    //         'GNU General Public License (GPL) 3.0',
    //         'GNU Lesser General Public License (LGPL) 3.0',
    //         'BSD 2-Clause "Simplified" License',
    //         'BSD 3-Clause "New" or "Revised" License',
    //         'Mozilla Public License (MPL) 2.0',
    //         'Creative Commons Zero v1.0 Universal (CC0 1.0)',
    //         'The Unlicense',
    //         'GNU Affero General Public License (AGPL) 3.0',
    //         'Eclipse Public License 2.0',
    //         'GNU General Public License (GPL) 2.0',
    //         'Apache License 1.1',
    //         'Artistic License 2.0',
    //         'Microsoft Public License (MS-PL)'
    //       ],
    // },
    // {
    //     type:'input',
    //     message:'What is your GitHub username? ',
    //     name:'github',
    // },
    {
        type:'input',
        message:'What is your email address? ',
        name:'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const fileName = `README.md`;

        


        console.log(data.email);
    });
}

// Function call to initialize app
init();
