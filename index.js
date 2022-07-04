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

            // if (menu input) then {finish, add employee}
            if(managerAnswers.menuSelection === 'Add engineer'){
                // engineer inquiry

            }else if(managerAnswers.menuSelection === 'Add intern'){
                // intern inquiry
                
            }else{
                // finish selected --> end inquiry
                return;
            }
        })
    
}


// fs write file -------------------------------------------------------------------------------------
