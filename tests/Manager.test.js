const Manager = require("../lib/Manager.js");

describe("Manager", () =>  {

    describe("create and initialise an instance of Manager", () => {
        test("initalise an Manager object", () => {
            const emp = new Manager();
            expect(emp instanceof Manager).toEqual(true);
           
        });
        test("it should create a Manager object with the github property set to the github argument passed with the constructor call", () => {
            const officenum = 29;
            const emp = new Manager("Debra", 7, "dat826@gmail.com", officenum)
            expect(emp.officeNumber).toEqual(officenum);
        });
        
    });
    describe("class functions", () => {
        
        test("getRole() returns stored value", () => {
            const role = "Manager";
            const emp = new Manager("Debra", 7, "dat826@gmail.com", "Beanalini")
            expect(emp.getRole()).toEqual(role);
        });
        test("getGitHub() returns stored value", () => {
            const officenum = 29;
            const emp = new Manager("Debra", 7, "dat826@gmail.com", officenum);
            expect(emp.getOfficeNumber()).toEqual(officenum);
        });
        
    });
});