const Intern = require('../intern');

describe('Intern', () => {
    describe('Initialization & Get functions', () => {
        // test getRole()
        it('should return the role type when a new Intern is initialized and the getRole() function is called', () => {
            const internRole = new Intern('name', 'id', 'email', 'school').getRole();
            expect(internRole).toEqual('Intern');
        })
        // test getName()
        it('should return the name when a new Intern is initialized and the getName() function is called', () => {
            const internName = new Intern('Jack', 'id', 'email', 'school').getName();
            expect(internName).toEqual('Jack');
        })
        // test getId()
        it('should return the id when a new Intern is initialized and the getId() function is called', () => {
            const internId = new Intern('name', '5', 'email', 'school').getId();
            expect(internId).toEqual('5');
        })
        // test getEmail()
        it('should return the email when a new Intern is initialized and the getEmail() function is called', () => {
            const internEmail = new Intern('name', 'id', 'jack@gmail.com', 'school').getEmail();
            expect(internEmail).toEqual('jack@gmail.com');
        })
        // test getSchool()
        it('should return the school when a new Intern is initialized and the getSchool() function is called', () => {
            const internSchool = new Intern('name', 'id', 'email', 'UCB').getSchool();
            expect(internSchool).toEqual('UCB');
        })
    })
})