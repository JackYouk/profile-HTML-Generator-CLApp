const Manager = require('../manager');

describe('Manager', () => {
    describe('Initialization & Get functions', () => {
        // test getRole()
        it('should return the role type when a new Manager is initialized and the getRole() function is called', () => {
            const managerRole = new Manager('name', 'id', 'email', 'officeNum').getRole();
            expect(managerRole).toEqual('Manager');
        })
        // test getName()
        it('should return the name when a new Manager is initialized and the getName() function is called', () => {
            const managerName = new Manager('Jack', 'id', 'email', 'officeNum').getName();
            expect(managerName).toEqual('Jack');
        })
        // test getId()
        it('should return the id when a new Manager is initialized and the getId() function is called', () => {
            const managerId = new Manager('name', '5', 'email', 'officeNum').getId();
            expect(managerId).toEqual('5');
        })
        // test getEmail()
        it('should return the email when a new Manager is initialized and the getEmail() function is called', () => {
            const managerEmail = new Manager('name', 'id', 'jack@gmail.com', 'officeNum').getEmail();
            expect(managerEmail).toEqual('jack@gmail.com');
        })
        // test getOffice()
        it('should return the office number when a new Manager is initialized and the getOffice() function is called', () => {
            const managerOffice = new Manager('name', 'id', 'email', '555').getOffice();
            expect(managerOffice).toEqual('555');
        })
    })
})