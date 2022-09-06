//Include packages needed for the team profile generator
const inquirer = require("inquirer");
const fs = require("fs");

//Include modules
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Array used to store the team members data
let teamArr = [];

//main menu questions
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
                createTeamProfile();
                //console.log("Creating Team profile...");
                break;
        }
        
    })
}



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
            message: "Please enter the intern's  Email address:"        
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of the intern's  school:"        
        }

   ]).then((response) => {
    //create new instance of the Intern class
    const intern = new Intern(response.managerengineerName, response.EmployeeID, response.email, response.school);
    //Add the engineer to the team profile array
    teamArr.push(intern);
    //Take the user back to the main main menu
    userMainMenu();
    //console.log(teamArr);
   })
};

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
            message: "Please enter the engineer's  Email address:"        
        },
        {
            type: "input",
            name: "githubUsn",
            message: "Please enter the engineer's  GitHub user name:"        
        }

   ]).then((response) => {
    //create new instance of the Engineer class
    const engineer = new Engineer(response.managerengineerName, response.EmployeeID, response.email, response.githubUsn);
    //Add the engineer to the team profile array
    teamArr.push(engineer);
    //Take the user back to the main main menu
    userMainMenu();
    //console.log(teamArr);
   })
};

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
            message: "Please enter the manager's Email address:"        
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
    //console.log(teamArr);
   })
};


// This functon inititalises the app
const createTeamProfile = () => {
    //call the userAnswers() to display the prompts
    console.log(teamArr);
    /*fs.writeFile('sampleREADME.md', generateMarkdown(data), (error) => {
          const outputMsg = (error)? 'Error has occured':'README file has been generated successfully';
          console.log(outputMsg)
    }) */
          
};

  //This function initialises the team profile generator
const init = () => {
    userMainMenu();
};

//call functoin to run the profile generator App
init();