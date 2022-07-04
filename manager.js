const Employee = require('./employee');


class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
    // returns string with HTML code for card
    writeCard(){
        return `
            <div class="card d-flex m-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Team Manager</h6>
                    <p class="card-text">ID: ${this.id}\n Office Number: ${this.officeNum}</p>
                    <a href="${this.email}" class="card-link">Email</a>
                </div>
            </div>
        `
    }
}

module.exports = Manager;