const fs = require("fs");

const buildTeamPage = teamArr => {

console.log("Inside buildTeam()");

const htmlMan =[];
const htmlEng =[];
const htmlInt = [];

    htmlMan.push(...teamArr
        .filter(man=>man.getRole() === "Manager")
        .map(manager =>renderMan(manager))
    );
    htmlEng.push(...teamArr
        .filter(eng=>eng.getRole() === "Engineer")
        .map(engineer =>renderEng(engineer))
    );
    htmlInt.push(...teamArr
        .filter(int=>int.getRole() === "Intern")
        .map(intern =>renderInt(intern))
    );


    console.log("----------------");   
    console.log(htmlMan);
    console.log("----------------");  

    console.log(htmlMan.join(""));
    createhtml(htmlMan.join(""), htmlEng.join(""), htmlInt.join(""));
}

const createhtml = (htmlMan, htmlEng, htmlInt) => {
    let htmlTemp = fs.readFileSync('./src/indexTemplate.html', 'utf8');
    htmlTemp = htmlTemp.replace('~~Manager~~', htmlMan);
    htmlTemp = htmlTemp.replace('~~Engineer~~', htmlEng);
    htmlTemp = htmlTemp.replace('~~Intern~~', htmlInt);

    console.log("----------------");   
    console.log(htmlTemp);
    console.log("----------------");
    fs.writeFileSync('./src/index.html', htmlTemp, 'utf8', (error) => {
          const outputMsg = (error)? 'Error has occured':'README file has been generated successfully';
          console.log(outputMsg)
    })  
}

const renderMan = (manager) => {
    console.log("insideRender");
    
   let managerHTML = `<div class="card employee-card col-1 col-sm-2 col-lg-3 mb-3 h-100">
    <div class="card-header">
    <h2>${manager.getName()}</h2>
    <h3> <i class="fa-solid fa-user-tie"></i> ${manager.getRole()}  </h3>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${manager.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
    </ul>
    </div>`;
    return managerHTML; 
}

const renderEng = (engineer) => {
    console.log("insideRender");
    
   let engineerHTML = `<div class="card employee-card col-1 col-sm-2 col-lg-3 mb-3 h-100">
    <div class="card-header">
    <h2>${engineer.getName()}</h2>
    <h3><i class="fa-solid fa-user-gear"></i>  ${engineer.getRole()}  </h3>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${engineer.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">${engineer.getGitHub()}</li>
    </ul>
    </div>`;
    return engineerHTML; 
}

const renderInt = (intern) => {
    console.log("insideRender");
    
   let internHTML = `<div class="card employee-card col-1 col-sm-2 col-lg-3 mb-3 h-100">
    <div class="card-header">
    <h2>${intern.getName()}</h2>
    <h3><i class="fa-solid fa-user-graduate"></i>  ${intern.getRole()}  </h3>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID ${intern.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">${intern.getSchool()}</li>
    </ul>
    </div>`;
    return internHTML; 
}


module.exports = buildTeamPage;



