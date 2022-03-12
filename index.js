const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
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
            generateCards()
            
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

function generateCards() {
    const cardsArr = [];
    // generateManagerCard();
    // generateEngineerCard();
    // if to test if there is an engineer or intern
    team.forEach((employee) => {
        if (employee.getRole() === "Manager") {
            const name = employee.getName();
            const role = employee.getRole();
            const id = employee.getId();
            const email = employee.getEmail();
            const officeNumber = employee.getOfficeNumber();
            var managerCard = 
            `<div class="card">
              <div class="card-body">
                <div class="card-header bg-info">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-title"><i class="fa-solid fa-briefcase"></i> ${role}</h6>
                </div>
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Office Number: ${officeNumber}</li>
                  </ul>
                </div>
              </div>
            </div>`;
            cardsArr.push(managerCard)
        } else if (employee.getRole() === "Engineer"){
            const name = employee.getName();
            const role = employee.getRole();
            const id = employee.getId();
            const email = employee.getEmail();
            const github = employee.getGithub();
            var engineerCard = 
            `<div class="card">
              <div class="card-body">
                <div class="card-header bg-info">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-title"><i class="fa-solid fa-glasses"></i> ${role}</h6>
                </div>
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${github}">github.com/${github}</a></li>
                  </ul>
                </div>
              </div>
            </div>`;
            cardsArr.push(engineerCard)
        } else if (employee.getRole() === "Intern") {
            const name = employee.getName();
            const role = employee.getRole();
            const id = employee.getId();
            const email = employee.getEmail();
            const school = employee.getSchool();
            var internCard = 
            `<div class="card">
              <div class="card-body">
                <div class="card-header bg-info">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-title"><i class="fa-solid fa-graduation-cap"></i> ${role}</h6>
                </div>
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Currently attending: ${school}</li>
                  </ul>
                </div>
              </div>
            </div> `;
            cardsArr.push(internCard)
        }
    })
    generateHTML(cardsArr)
    return 
}

function generateHTML(cardsArr) {
    const startingHTML = 
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css" />
  </head>
  <body>
    <div class="jumbotron text-center">
    <h1 class="display-4">My Team</h1>
    <p class="lead">Welcome to the team! Names, roles, ID's, ofiice number and emails are listed below.</p>
    </div>
    <main>
      <div class="card-group d-flex align-content-center justify-content-center text-center">`;

    const endingHTML = 
      `</div>
      </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/33d1c7835e.js" crossorigin="anonymous"></script>
</html>`;
            cards = cardsArr.join(" ");
            const data = `${startingHTML} ${cards} ${endingHTML}`
            fs.writeFile('index.html', `${data}`, (err) =>
            err ? console.error(err) : console.log('HTML is complete! Open in browser to see results!'));
}




//     }
//     function generateEngineerCard() {
//         team.forEach((engineer) => {
//         const name = engineer.getName();
//         const role = engineer.getRole();
//         const id = engineer.getId();
//         const email = engineer.getEmail();
//         const github = engineer.getGithub();
//         // console.log(name)
//         })
//     }
// }
//       const card = `<div class="card">
// }

// // function generateCard() {
// //     let eName = engineerAnswers.engineerName;
// //     let eId = engineerAnswers.engineerId;
// //     let eEmail = engineerAnswers.engineerEmail;
// //     let eGithub = engineerAnswers.engineerGithub;
// //     let eRole = engineerAnswers.getRole()
// //     return `<div class="card">
// //     <div class="card-body">
//       <div class="card-header bg-info">
//         <h5 class="card-title">${eName}</h5>
//         <h6 class="card-title">${eRole}</h6>
//       </div>
//       <div class="card">
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">ID: ${eId}</li>
//           <li class="list-group-item">Email: <a href="mailto:${eEmail}">${eEmail}</a></li>
//           <li class="list-group-item">Github: <a href="https://github.com/${eGithub}">github.com/${eGithub}</a></li>
//         </ul>
//       </div>
//     </div>
//   </div>`;
//   fs.append
// }

// function generateManager(mgmtAnswers) {

// }


// const generateHTML = ({title, motivation, why, solve, learn, installation, url, collaborators, test, license, year, licenseCollaborators, github, email}, licenseResults) => {
//     return `HTML`;
// }
// fs.appendFile('index.html', generateHTML(answers, licenseResults), (err) =>
//     err ? console.error(err) : console.log('HTML successfully generated!'));


  // fs.writeFile('index.html', generateHTML(), (err) => {
    //     if (err) {
    //         console.error(err)
    //     } else {
    //         return
    //     }
    // }); 