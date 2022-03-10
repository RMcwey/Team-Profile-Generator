const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, officeNumber){
      super(name, id, email)
      this.officeNumber = officeNumber;
  }
}

module.exports = Intern;