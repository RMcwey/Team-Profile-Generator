const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
describe("Employee class", () => {
  describe("Gets name", () => {
    it("recieves user input for name", () => {
      const name = 'Ross';
      const employee = new Employee('Ross', '1', 'rmcwey@hotmail.com');
      expect(employee.getName()).toEqual('Ross');
    });
  });

  describe("Gets recieved ID", () => {
    it("recieves user input for ID", () => {
      const id = "1";
      const employee = new Employee('Ross', '1', 'rmcwey@hotmail.com');
      expect(employee.getId()).toEqual(id);
    });
  });

  describe("Gets recieved email", () => {
    it("recieves user input for email", () => {
      const email = "rmcwey@hotmail.com";
      const employee = new Employee('Ross', '1', 'rmcwey@hotmail.com');
      expect(employee.getEmail()).toEqual(email);
    });
  });

  describe("Gets role", () => {
    it("shows the role", () => {
      const employee = new Employee;
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});

describe("Manager class", () => {
  describe("validates office number", () => {
    it("receives an input for office number", () => {
      const manager = new Manager('Ross', '1', 'rmcwey@hotmail.com', '117');
      expect(manager.officeNumber).toEqual('117');
    });
  });
  describe("Gets role", () => {
    it("shows the role as manager and not employee", () => {
      const manager = new Manager;
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});

describe("Engineer class", () => {
  describe("validates github", () => {
    it("receives an input for github", () => {
      const engineer = new Engineer('Ross', '1', 'rmcwey@hotmail.com', 'RMcwey');
      expect(engineer.getGithub()).toEqual('https://github.com/RMcwey');
    });
  });
  describe("Gets role", () => {
    it("shows the role as engineer and not employee", () => {
      const engineer = new Engineer;
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});

describe("Intern class", () => {
  describe("validates school", () => {
    it("receives an input for school", () => {
      const intern = new Intern('Ross', '1', 'rmcwey@hotmail.com', 'GA Tech');
      expect(intern.getSchool()).toEqual('GA Tech');
    });
  });
  describe("Gets role", () => {
    it("shows the role as intern and not employee", () => {
      const intern = new Intern('Ross', '1', 'rmcwey@hotmail.com', 'GA Tech');
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});

