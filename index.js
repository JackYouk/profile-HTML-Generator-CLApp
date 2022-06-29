



// packages --------------------------------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');

// Inquirer ---------------------------------------------------------------------------
// menu object
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
// manager inquiery
inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        console.log(answers);
        
    })

// engineer ====================
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
// eng inquiry

// intern =======================
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
// intern inquiry
    


// fs write file -------------------------------------------------------------------------------------
