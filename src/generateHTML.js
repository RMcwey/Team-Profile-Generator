const fs = require('fs');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const index = require('../index')

function generateCards(team) {
  const cardsArr = [];
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
          </div>
          `;
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
          </div>
          `;
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
          </div>
          `;
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
    <link rel="stylesheet" href="../dist/assets/css/reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/assets/css/style.css" />
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
            fs.writeFile('./dist/sample.html', `${data}`, (err) =>
            err ? console.error(err) : console.log('HTML is complete! Open in browser to see results!'));
}
module.exports = generateCards;