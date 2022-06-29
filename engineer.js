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
let engData;
function engInquiry(){
    inquirer
        .prompt(engQuestions)
        .then((answers) => {
            engData = answers;
        })
}