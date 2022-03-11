const Manager = require('../lib/manager');

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