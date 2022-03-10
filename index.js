const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: "managerName",
    },
    {
        type: 'input',
        message: "What is your team manager's email?",
        name: "managerEmail",
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: "managerId",
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: "managerOffice",
    },
]).then((answers) => {
    var license = answers.license;
    var year = answers.year;
    var licenseCollaborators = answers.licenseCollaborators
    var licenseResults = '';
    var licenseBadge = '';
    generateLicense(answers);
    function generateLicense(answers) {
        if (license === 'MIT'){
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

        

        } else if (license === 'Apache 2.0') {
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

        
           
        } else if (license === 'GNU GPL v2') {
            licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"

        
           
            // console.log(license)
        } else if (license === 'GNU GPL v3') {
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

            // licenseResults = 
            
        }
    }

const generateHTML = ({title, motivation, why, solve, learn, installation, url, collaborators, test, license, year, licenseCollaborators, github, email}, licenseResults) => {
    return `# ${title}

${licenseBadge}
<br>

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Live URL](#live-url)
* [Questions](#questions)
* [License](#license)
    

## Description 

- What was your motivation? ${motivation}
- Why did you build this project? ${why}
- What problem does it solve? ${solve}
- What did you learn? ${learn}

## Installation

${installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Live URL
${url}

## Credits
${collaborators}

## Tests

${test}

## Questions
My Github page: https://github.com/${github}
<br>
For any questions please contact me at ${email}

## License 
<br>
${license}
<br>
${licenseResults}
    `;
}
fs.writeFile('index.html', generateHTML(answers, licenseResults), (err) =>
    err ? console.error(err) : console.log('README successfully generated!'));
});




// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getOlder() {
//         this.age++
//     }
// }



// class Fighter extends Person {
//     constructor(name, age, health) {
//         super(name, age);
//         this.health = health || 10;

//     }
// }

// var num = 5
// `Hello this is ${
    
// }`