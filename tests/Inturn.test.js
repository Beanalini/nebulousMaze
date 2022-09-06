const Intern = require("../lib/Intern.js");

describe("Intern", () =>  {

    describe("create and initialise an instance of Intern", () => {
        test("initalise an Intern object", () => {
            const emp = new Intern();
            expect(emp instanceof Intern).toEqual(true);
           
        });
        test("it should create a Intern object with the githubschool property set to the school argument passed with the constructor call", () => {
            const school = "Birmingham University";
            const emp = new Intern("Debra", 7, "dat826@gmail.com", school)
            expect(emp.school).toEqual(school);
        });
        
    });
    describe("class functions", () => {
        
        test("getRole() returns stored value", () => {
            const role = "Intern";
            const emp = new Intern("Debra", 7, "dat826@gmail.com", "Birmingham University")
            expect(emp.getRole()).toEqual(role);
        });
        test("getSchool() returns stored value", () => {
            const school = "Birmingham University";
            const emp = new Intern("Debra", 7, "dat826@gmail.com", school);
            expect(emp.getSchool()).toEqual(school);
        });
        
    });
});