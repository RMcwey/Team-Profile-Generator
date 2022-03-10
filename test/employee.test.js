const Employee = require("../lib/employee");
const Manager = require("../lib/manager")
describe("Employee class", () => {
  describe("Gets name", () => {
    it("recieves user input for name", () => {
      const name = 'Ross';
      const employee = new Employee('Ross', '1', 'rmcwey@hotmail.com')
      expect(employee.getName()).toEqual('Ross')
    });
  })
  describe("Gets recieved ID", () => {
    it("recieves user input for ID", () => {
      const id = "1";
      const employee = new Employee('Ross', '1', 'rmcwey@hotmail.com')
      expect(employee.getId()).toEqual(id);
    })
  })
  describe("Gets recieved email", () => {
    it("recieves user input for email", () => {
      const email = "rmcwey@hotmail.com";
      const employee = new Employee('Ross', '1', 'rmcwey@hotmail.com')
      expect(employee.getEmail()).toEqual(email);
    })
  })
  describe("Gets role", () => {
    it("shows the role", () => {
      const employee = new Employee
      expect(employee.getRole()).toEqual('Employee')
    })
  })
})

describe("Manager class", () => {
  // describe("validates office number")
  describe("Gets role", () => {
    it("shows the role as manager and not employee", () =>{
      const manager = new Manager
      expect(manager.getRole()).toEqual('Manager')
    })
  })
})