// packages ------------------------------------------------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

// HTML code (string) --------------------------------------------------------------------------------
let htmlCode = '';

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
            htmlCode += manager.writeCard();

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
                            htmlCode += engineer.writeCard();
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
                        // add internineer card html code to html code string
                        htmlCode += intern.writeCard();
                        // init menu for internineer inquiry
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


// fs write file -------------------------------------------------------------------------------------
