class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${this.name}`;
    }
    getId() {
        return `${this.id}`;
    }
    getEmail() {
        return `${this.email}`;
    }
    getRole(){
        return "Employee";
    };
}
const John = new Employee('John', '1', 'john@john.com');
console.log(John.name);
console.log(John.getId());
module.exports = Employee;