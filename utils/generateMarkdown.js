// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
        case 'The MIT License':
            return '\n![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'Apache 2.0 License':
            return '\n![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        case 'GNU GPL v3':
            return '\n![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'BSD 3-Clause License':
            return '\n![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
        case 'Eclipse Public License 1.0':
            return '\n![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
        case 'Mozilla Public License 2.0':
            return '\n![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
        case 'The Unlicense':
            return '\n![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
        default:
            return '';
    }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
        case 'The MIT License':
            return 'https://opensource.org/licenses/MIT';
        case 'Apache 2.0 License':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'GNU GPL v3':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        case 'BSD 3-Clause License':
            return 'https://opensource.org/licenses/BSD-3-Clause';
        case 'Eclipse Public License 1.0':
            return 'https://opensource.org/licenses/EPL-1.0';
        case 'Mozilla Public License 2.0':
            return 'https://opensource.org/licenses/MPL-2.0';
        case 'The Unlicense':
            return 'http://unlicense.org/';
        default:
            return '';
    }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseDescription = `This project is licensed under ${license}. Here is the link to the license to access more information for your reference: `;

    if (license) {
        return [`\n* [License](#license)` ,`\n\n## <a name="license"></a>License\n\n${licenseDescription}`] 
    }
    else {
        return ['', ''];
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
 return `
# ${data.title}${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)${licenseSection[0]}
* [Questions](#questions)

## <a name="installation"></a>Installation

To install necessary dependencies, run the following command:

${data.installation}

## <a name="usage"></a>Usage

${data.usage}

## <a name="contributing"></a>Contribution

${data.contribution}

## <a name="tests"></a>Tests

To run tests, run the following command:

${data.test}${licenseSection[1]}${renderLicenseLink(data.license)}

## <a name="questions"></a>Questions

If you have further questions, you are welcome to reach me through my email at ${data.email}.

You can view my projects by going through my GitHub profile at https://github.com/${data.github.trim()}.
`;
}

module.exports = {
    generateMarkdown,
};