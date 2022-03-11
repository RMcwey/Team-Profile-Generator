const Intern = require("../lib/intern");

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
