const Employee = require("../lib/Employee.js");

describe("Employee", () =>  {

    describe("create and initialise an instance of Employee", () => {
        test("initalise an Employee object", () => {
            const emp = new Employee();
            expect(emp instanceof Employee).toEqual(true);
            //expect(typeof(emp)===({}));
        });
        test("it should create a employee object with the name property set to the name argument passed with the constructor call", () => {
            const name = "Debra";
            const emp = new Employee(name)
            expect(emp.name).toEqual(name);
        });
        test("it should create a employee object with the id property set to the id argument passed with the constructor call", () => {
            const id = 7;
            const emp = new Employee("Debra", id);
            expect(emp.id).toEqual(id);
        });
        test("it should create a employee object with the email property set to the email argument passed with the constructor call", () => {
            const email = "dat826@gmail.com";
            const emp = new Employee("Debra", 7, email);
            expect(emp.email).toEqual(email);
        });
    });
    describe("class functions", () => {
        
        test("getName()", () => {
            const name = "Debra";
            const emp = new Employee(name)
            expect(emp.getName()).toEqual(name);
        });
        test("getId()", () => {
            const id = 7;
            const emp = new Employee("Debra", id);
            expect(emp.getId()).toEqual(id);
        });
        test("getEmail()", () => {
            const email = "dat826@gmail.com";
            const emp = new Employee("Debra", 7, email);
            expect(emp.getEmail()).toEqual(email);
        });
    });
});