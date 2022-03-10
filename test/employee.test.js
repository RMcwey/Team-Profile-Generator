const Employee = require("../lib/employee");

describe("Employee class", () => {
  describe("Gets name", () => {
    it("recieves user input for name", () => {
      const name = 'Ross';
      const employee = new Employee(name)
      expect(employee.name).toEqual('Ross')
    });
  })
})