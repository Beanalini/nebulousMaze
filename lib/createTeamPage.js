const fs = require("fs");

//
const createTeamPage = teamArr => {
        
    /*filter teamArr to an array of manager entries, pass this  to the map method and call renderMan()
     to create html code which is  returned as an array to htmlMan */
    
   const htmlMan = teamArr.filter(man=>man.getRole() === "Manager")
        .map(manager =>renderMan(manager))        
    
    /*filter teamArr to an array of engineer entries, pass this  to the map method and call renderEng()
     to create html code which is returned as an array to htmlEng */
    const htmlEng = teamArr.filter(eng=>eng.getRole() === "Engineer")
        .map(engineer =>renderEng(engineer));
     /*filter teamArr to an array of Intern entries, pass this  to the map method and call renderInt()
     to create html code which is returned as an array to htmlInt */
    const htmlInt = teamArr.filter(int=>int.getRole() === "Intern")
            .map(intern =>renderInt(intern))    
    
    
     //join data into one string element for each emplyee role
    //Pass the string of html data for manager, Engineer and Intern to create the Main HTML page
    createhtml(htmlMan.join(""), htmlEng.join(""), htmlInt.join(""));
}
//createhtml generates the team profile html page
const createhtml = (htmlMan, htmlEng, htmlInt) => {
    //Read the html template page and save it to htmlTemp
    let htmlTemp = fs.readFileSync('./src/indexTemplate.html', 'utf8');
    //using the Replace method replace the placeholders in the html template with the associated html string
    htmlTemp = htmlTemp.replace('~~Manager~~', htmlMan);
    htmlTemp = htmlTemp.replace('~~Engineer~~', htmlEng);
    htmlTemp = htmlTemp.replace('~~Intern~~', htmlInt);

    //call function to write the html file
    writeHtmlFile(htmlTemp);
 }   

 //writeHtmlFile() writes the data to file teamProfile.html in directory 'dist'
 const writeHtmlFile = (htmlData) => {
    //write the data to file index.html in the dist directory 
    fs.writeFile('./dist/teamProfile.html', htmlData, (error) => {
          error? console.error(error):console.log('\u001B[35mYour Team Profile has been generated successfully :-)\u001B[0m');
          
    })  
}
/*RenderMan() RenderEng() and RenderInt()  perform the sam efunction for their respective eomplyee types: the functions carry out string interpolation
 replacing template literal placeholders with values in the array entry passed as an argument from the calling function then concatanates into one
 string which is returned to the calling function*/
const renderMan = (manager) => {    
   let managerHTML = `
    <div class="card staff-card">
        <div class="card-header bg-primary">
            <h2>${manager.getName()}</h2>
            <h3> <i class="fa-solid fa-user-tie"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">OfficeNumber: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
    return managerHTML; 
}

const renderEng = (engineer) => {
    
   let engineerHTML = `
   <div class="card staff-card">
        <div class="card-header bg-secondary">
            <h2>${engineer.getName()}</h2>
            <h3><i class="fa-solid fa-user-gear"></i>  ${engineer.getRole()}  </h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush" >
            <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
            <li class="list-group-item"> Email:<a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>`;
    return engineerHTML; 
}

const renderInt = (intern) => {
        
   let internHTML = `
   <div class="card staff-card">
        <div class="card-header bg-success">
            <h2>${intern.getName()}</h2>
            <h3><i class="fa-solid fa-user-graduate"></i>  ${intern.getRole()}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
    return internHTML; 
}


module.exports = createTeamPage;



