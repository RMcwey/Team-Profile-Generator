const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
  describe("validates github", () => {
    it("receives an input for github", () => {
      const engineer = new Engineer('Ross', '1', 'rmcwey@hotmail.com', 'RMcwey');
      expect(engineer.getGithub()).toEqual('RMcwey');
    });
  });
  describe("Gets role", () => {
    it("shows the role as engineer and not employee", () => {
      const engineer = new Engineer;
      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});