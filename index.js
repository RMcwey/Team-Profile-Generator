const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
let answers = "";
let mgmtAnswers = "";

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
]).then((mgmtAnswers) => {
    console.log(mgmtAnswers)
    // generateManager(mgmtAnswers);
    promptUserAgain()
    // promptUserforEngineer()
    // promptUserforIntern()
    
});    

const promptUserAgain = () => {
    return inquirer.prompt([
        {
        type: 'rawlist',
        name: 'team',
        message: 'Please choose who else is on the team: ',
        choices: ['Engineer', 'Intern', 'All Done'],
        },
    ])
    .then(answer => {
        console.info(answer.team)
        if (answer === 'Engineer') {
            promptUserforEngineer();
        } else if (answer)
        console.info('Answer:', answer.team);
    });
}
// function generateManager(mgmtAnswers) {

// }


// const generateHTML = ({title, motivation, why, solve, learn, installation, url, collaborators, test, license, year, licenseCollaborators, github, email}, licenseResults) => {
//     return `HTML`;
// }
// fs.appendFile('index.html', generateHTML(answers, licenseResults), (err) =>
//     err ? console.error(err) : console.log('HTML successfully generated!'));





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