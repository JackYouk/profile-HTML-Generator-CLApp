const Employee = require('./employee');




class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    writeCard(){
        return `
            <div class="card m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Team Manager</h6>
                    <p class="card-text">ID: ${this.id}</p>
                    <a href="${this.email}" class="card-link">Email</a>
                    <a href="" class="card-link">Office Number: ${this.officeNum}</a>
                </div>
            </div>
        `
    }


}










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
