
const Employee = require('./employee');




class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }


}










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
let internData;
function internInquiry(){
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            internData = answers;
        })
}