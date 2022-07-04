// packages ------------------------------------------------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
// classes -------------------------------------------------------------------------------------------
const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

// HTML code (string) --------------------------------------------------------------------------------
let htmlContent = '';
let genHtmlCode = (content) => {
    let htmlCode = '';
    htmlCode = htmlCode.concat(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Profiles</title>
            <!-- Bootstrap CSS cdn -->
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" 
                crossorigin="anonymous"
            >
        </head>
        <body>`
    )
    htmlCode = htmlCode.concat(content);
    htmlCode = htmlCode.concat(
        `<!-- Bootstrap JS cdn -->
        <script 
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" 
            crossorigin="anonymous">
        </script>
        </body>
        </html>`
    )

    return htmlCode;
}

// inquirer ------------------------------------------------------------------------------------------
function inquiry(){
    // menu questions object ===============
    const menu = {
        message: 'Add team members/Finish building team?',
        name: 'menuSelection',
        type: 'list',
        choices: ['Add engineer', 'Add intern', 'Finish'],
    }
    // manager =============================
    // manager questions array
    const managerQuestions = [
        {
            message: 'Team Manager name?',
            name: 'managerName',
            type: 'input',
        },
        {
            message: 'Team Manager employee ID?',
            name: 'managerID',
            type: 'input',
        },
        {
            message: 'Team Manager email?',
            name: 'managerEmail',
            type: 'input',
        },
        {
            message: 'Team Manager office number?',
            name: 'managerOffice',
            type: 'input',
        },
        {
            message: 'Team Manager office number?',
            name: 'managerOffice',
            type: 'input',
        },
        menu,
    ];
    // engineer ===========================
    // eng questions array
    const engQuestions = [
        {
            message: 'Engineer name?',
            name: 'engName',
            type: 'input',
        },
        {
            message: 'Engineer ID?',
            name: 'engID',
            type: 'input',
        },
        {
            message: 'Engineer email?',
            name: 'engEmail',
            type: 'input',
        },
        {
            message: 'Engineer github?',
            name: 'engGithub',
            type: 'input',
        },
        menu,
    ];
    // intern ============================
    // intern questions array
    const internQuestions = [
        {
            message: 'Intern name?',
            name: 'internName',
            type: 'input',
        },
        {
            message: 'Intern ID?',
            name: 'internID',
            type: 'input',
        },
        {
            message: 'Intern email?',
            name: 'internEmail',
            type: 'input',
        },
        {
            message: 'Intern school?',
            name: 'internSchool',
            type: 'input',
        },
        menu,
    ];
    
    // inquiery ================================================
    // manager inquiry
    inquirer
        .prompt(managerQuestions)
        .then((managerAnswers) => {
            // add manager answers to html code
            let managerName = managerAnswers.managerName;
            let managerID = managerAnswers.managerID;
            let managerEmail = managerAnswers.managerEmail;
            let managerOffice = managerAnswers.managerOffice;
            // declare manager using manager class
            let manager = new Manager(managerName, managerID, managerEmail, managerOffice);
            // add manager card html code to html code string
            htmlContent += manager.writeCard();

            // menu cb
            let menuCB = (employeeAnswers) => {
                // if (menu input) then {finish, add employee}
                if(employeeAnswers.menuSelection === 'Add engineer'){
                    // engineer inquiry
                    inquirer
                        .prompt(engQuestions)
                        .then((engAnswers) => {
                            // add eng answers to html code
                            let engName = engAnswers.engName;
                            let engID = engAnswers.engID;
                            let engEmail = engAnswers.engEmail;
                            let engGithub = engAnswers.engGithub;
                            // declare eng using eng class
                            let engineer = new Engineer(engName, engID, engEmail, engGithub);
                            // add engineer card html code to html code string
                            htmlContent += engineer.writeCard();
                            // init menu for engineer inquiry
                            menuCB(engAnswers);
                        })

                    return;
                }else if(employeeAnswers.menuSelection === 'Add intern'){
                    // intern inquiry
                    inquirer
                    .prompt(internQuestions)
                    .then((internAnswers) => {
                        // add eng answers to html code
                        let internName = internAnswers.internName;
                        let internID = internAnswers.internID;
                        let internEmail = internAnswers.internEmail;
                        let internSchool = internAnswers.internSchool;
                        // declare intern using intern class
                        let intern = new Intern(internName, internID, internEmail, internSchool);
                        // add intern card html code to html code string
                        htmlContent += intern.writeCard();
                        // init menu for intern inquiry
                        menuCB(internAnswers);
                    })

                    return;
                }else{
                    // finish selected --> end inquiry
                    return;
                }
            }
            // init menu for manager inquiry
            menuCB(managerAnswers);
        })
}

// init inquiry
inquiry();

// fs write file -------------------------------------------------------------------------------------
let htmlCode = genHtmlCode(htmlContent);
fs.writeFile(`employeeProfiles.html`, htmlCode, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('success');
  })
