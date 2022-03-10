const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
let theManager = "";
let answers = "";
let mgmtAnswers = "";
let engineerAnswers = "";

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
    theManager = new Manager(mgmtAnswers);
    console.log(theManager)
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
        if (answer.team === 'Engineer') {
            promptUserForEngineer();
        } else if (answer.team === 'Intern') {
        console.info('Answer:', answer.team);
        } else {
            // generateHTML()
            console.log('ended')
        }
    });
}

const promptUserForEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: "engineerName",
        },
        {
            type: 'input',
            message: "What is your engineer's employee ID?",
            name: "engineerId",
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: "engineerEmail",
        },
        {
            type: 'input',
            message: "What is your engineer's Github username?",
            name: "engineerGithub",
        },
    ])
    .then(engineerAnswers => {
        generateCard(engineerAnswers)
    });
}

function generateCard(engineerAnswers) {
    let eName = engineerAnswers.engineerName;
    let eId = engineerAnswers.engineerId;
    let eEmail = engineerAnswers.engineerEmail;
    let eGithub = engineerAnswers.engineerGithub;
    return `<div class="card">
    <div class="card-body">
      <div class="card-header bg-info">
        <h5 class="card-title">${eName}</h5>
        <h6 class="card-title"></h6>
      </div>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${eId}</li>
          <li class="list-group-item">Email: <a href="mailto:${eEmail}">${eEmail}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${eGithub}">github.com/${eGithub}</a></li>
        </ul>
      </div>
    </div>
  </div>`;
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