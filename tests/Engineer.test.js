const Engineer = require("../lib/Engineer.js");

describe("Engineer", () =>  {

    describe("create and initialise an instance of Engineer", () => {
        test("initalise an Engineer object", () => {
            const emp = new Engineer();
            expect(emp instanceof Engineer).toEqual(true);
           
        });
        test("it should create a Engineer object with the github property set to the github argument passed with the constructor call", () => {
            const github = "Beanalini";
            const emp = new Engineer("Debra", 7, "dat826@gmail.com", github)
            expect(emp.github).toEqual(github);
        });
        
    });
    describe("class functions", () => {
        
        test("getRole()", () => {
            const role = "Engineer";
            const emp = new Engineer("Debra", 7, "dat826@gmail.com", "Beanalini")
            expect(emp.getRole()).toEqual(role);
        });
        test("getGitHub()", () => {
            const github = "Beanalini";
            const emp = new Engineer("Debra", 7, "dat826@gmail.com", github);
            expect(emp.getGitHub()).toEqual(github);
        });
        
    });




});