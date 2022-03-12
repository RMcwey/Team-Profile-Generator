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
        default: () => {},
            validate: function (name) {
              notValid = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name)
              if (notValid) {
                  console.log("  Please enter a valid name")
                  return false;
              } else {
                  return true;
              }
          }
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: "managerId",
        default: () => {},
            validate: function (id) {
              notValid = /[!@$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/.test(id)
              if (notValid) {
                  console.log("  Please enter a valid ID")
                  return false;
              } else {
                  return true;
              }
          }
    },
    {
        type: 'input',
        message: "What is your team manager's email?",
        name: "managerEmail",
        default: () => {},
          validate: function (email) {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log("  Please enter a valid email")
                  return false;
              }
          }
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: "managerOffice",
        default: () => {},
            validate: function (number) {
              notValid = /[a-zA-Z!@$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/.test(number)
              if (notValid) {
                  console.log("  Please enter a valid office number")
                  return false;
              } else {
                  return true;
              }
          }
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
            createHtml(team)
        }
    });
}

const promptUserForEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: "name",
            default: () => {},
            validate: function (name) {
              notValid = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name)
              if (notValid) {
                  console.log("  Please enter a valid name")
                  return false;
              } else {
                  return true;
              }
          }
        },
        {
            type: 'input',
            message: "What is your engineer's employee ID?",
            name: "id",
            default: () => {},
            validate: function (id) {
              notValid = /[!@$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/.test(id)
              if (notValid) {
                  console.log("  Please enter a valid ID")
                  return false;
              } else {
                  return true;
              }
          }
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: "email",
            default: () => {},
            validate: function (email) {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log("  Please enter a valid email")
                  return false;
              }
          }
        },
        {
            type: 'input',
            message: "What is your engineer's Github username?",
            name: "github",
            default: () => {},
            validate: function (github) {
              notValid = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/.test(github)
              if (notValid) {
                  console.log("  Please enter a valid Github")
                  return false;
              } else {
                  return true;
              }
          }
            
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
            default: () => {},
            validate: function (name) {
              notValid = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name)
              if (notValid) {
                  console.log("  Please enter a valid name")
                  return false;
              } else {
                  return true;
              }
          }
        },
        {
            type: 'input',
            message: "What is your interns's employee ID?",
            name: "id",
            default: () => {},
            validate: function (id) {
              notValid = /[!@$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/.test(id)
              if (notValid) {
                  console.log("  Please enter a valid ID")
                  return false;
              } else {
                  return true;
              }
          }
        },
        {
            type: 'input',
            message: "What is your interns's email?",
            name: "email",
            default: () => {},
            validate: function (email) {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log("  Please enter a valid email")
                  return false;
              }
          }
        },
        {
            type: 'input',
            message: "What is your interns's current school?",
            name: "school",
            default: () => {},
            validate: function (school) {
              notValid = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(school)
              if (notValid) {
                  console.log("  Please enter a valid school name")
                  return false;
              } else {
                  return true;
              }
          }
        },
    ])
    .then(internAnswers => {
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school,);
        team.push(intern)
        promptUserAgain()
    });
}