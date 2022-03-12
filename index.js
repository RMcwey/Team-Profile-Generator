const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createHtml = require('./src/generateHTML');
var team = []

inquirer.prompt([
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: "managerName",
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: "managerId",
    },
    {
        type: 'input',
        message: "What is your team manager's email?",
        name: "managerEmail",
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: "managerOffice",
    },
]).then((mgmtAnswers) => {
    const theManager = new Manager(mgmtAnswers.managerName, mgmtAnswers.managerId, mgmtAnswers.managerEmail, mgmtAnswers.managerOffice,);
    team.push(theManager)
    promptUserAgain()
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
        if (answer.team === 'Engineer') {
            promptUserForEngineer();
        } else if (answer.team === 'Intern') {
            promptUserForIntern();
        } else {
            console.log(createHtml(team))
            
            // generate the end of the html and console log that the html is completed
        }
    });
}

const promptUserForEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: "name",
        },
        {
            type: 'input',
            message: "What is your engineer's employee ID?",
            name: "id",
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: "email",
        },
        {
            type: 'input',
            message: "What is your engineer's Github username?",
            name: "github",
        },
    ])
    .then(engineerAnswers => {
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github,);
        team.push(engineer)
        promptUserAgain()
    });
}

const promptUserForIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your interns's name?",
            name: "name",
        },
        {
            type: 'input',
            message: "What is your interns's employee ID?",
            name: "id",
        },
        {
            type: 'input',
            message: "What is your interns's email?",
            name: "email",
        },
        {
            type: 'input',
            message: "What is your interns's current school?",
            name: "school",
        },
    ])
    .then(internAnswers => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school,);
        team.push(intern)
        promptUserAgain()
    });
}