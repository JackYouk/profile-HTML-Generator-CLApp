const Employee = require('./employee');


class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    // returns string with HTML code for card
    writeCard(){
        return `
            <div class="card d-flex m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                    <p class="card-text">ID: ${this.id}</p>
                    <a href="${this.email}" class="card-link">Email</a>
                    <a href="${this.school}" class="card-link">Education</a>
                </div>
            </div>
        `
    }
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;