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
        
    })
