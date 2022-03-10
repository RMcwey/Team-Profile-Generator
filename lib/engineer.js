const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, officeNumber){
      super(name, id, email)
      this.officeNumber = officeNumber;
  }
}

module.exports = Engineer;