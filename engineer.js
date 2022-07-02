const Employee = require('./employee');




class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    writeCard(){
        return `
            <div class="card m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                    <p class="card-text">ID: ${this.id}</p>
                    <a href="${this.email}" class="card-link">Email</a>
                    <a href="${this.github}" class="card-link">GitHub</a>
                </div>
            </div>
        `
    }


}











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
