//Include packages needed for the team profile generator
const inquirer = require("inquirer");
const fs = require("fs");

//Include modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const buildTeamPage = require("./lib/buildTeamPage");
//Array used to store the team members responses
let teamArr = [];

//main menu questions - ask the user which type of role thay want to add to the profile
const userMainMenu = () => {
    return inquirer.prompt([        
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Please choose the role to include in the team member profile',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Team complete: Create team profile"
            ]    
        },
        
    ]).then((response) => {
        switch (response.mainMenu) {
            case "Manager":
                getManagerData();
                //console.log("Manager selected");
                break;
            case "Engineer":
                getEngineerData();
                //console.log("Engineer selected");
                break;
            case "Intern":
               getInternData();
               //console.log("Intern selected");
                break;
            case "Team complete: Create team profile":
                //buildTeamPage() takes the user responses and builds the profile page;
                buildTeamPage(teamArr); 
                console.log("Creating Team profile...");
                break;
        }
        
    })
}

//getInternData() requests profile data for an Intern 
const getInternData = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter the intern's name:"      
        },
        {
            type: "input",
            name: "EmployeeID",
            message: "Please enter the intern's  employee ID:"       
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's  Email address:",
            validate: (answer) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if(!emailRegex.test(answer)) {
                    return "Please provide a valid email address!"
                }
                return true
            }             
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of the intern's  school:"        
        }

   ]).then((response) => {
    //create new instance of the Intern class
    const intern = new Intern(response.internName, response.EmployeeID, response.email, response.school);
    //Add the intern reposnses to the team profile array
    teamArr.push(intern);
    //Take the user back to the main menu
    userMainMenu();
    
   })
};
//getEngineerData() requests profile data for an Engineer
const getEngineerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the engineer's name:"      
        },
        {
            type: "input",
            name: "EmployeeID",
            message: "Please enter the engineer's  employee ID:"       
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's Email address:",
            validate: (answer) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if(!emailRegex.test(answer)) {
                    return "Please provide a valid email address!"
                }
                return true
            }        
        },
        {
            type: "input",
            name: "githubUsn",
            message: "Please enter the engineer's  GitHub user name:",
              
        }

   ]).then((response) => {
    //create new instance of the Engineer class
    const engineer = new Engineer(response.engineerName, response.EmployeeID, response.email, response.githubUsn);
    //Add the engineer to the team profile array
    teamArr.push(engineer);
    //Take the user back to the main main menu
    userMainMenu();
    
   })
};
//getManagerData() requests profile data for a Manager
const getManagerData = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the team manager's name:"      
        },
        {
            type: "input",
            name: "EmployeeID",
            message: "Please enter the manager's employee ID:"       
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's Email address:",
            validate: (answer) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if(!emailRegex.test(answer)) {
                    return "Please provide a valid email address!"
                }
                return true
            }        
                                
        },
        {
            type: "input",
            name: "officeNum",
            message: "Please enter the manager's office number:"        
        }

   ]).then((response) => {
    //create new instance of the manager class
    const manager = new Manager(response.managerName, response.EmployeeID, response.email, response.officeNum);
    //Add the mamanger to the team profile array
    teamArr.push(manager);
    //Take the user back to the main main menu
    userMainMenu();
    
   })
};

//This function initialises the team profile generator
const init = () => {
    //This function starts the user prompt questions
    userMainMenu();
};

//call function to run the profile generator App
init();