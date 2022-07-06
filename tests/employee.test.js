const Employee = require('../employee');

describe('Employee', () => {
    describe('Initialization & Get functions', () => {
        // test getRole()
        it('should return the role type when a new Employee is initialized and the getRole() function is called', () => {
            const employeeRole = new Employee('name', 'id', 'email').getRole();
            expect(employeeRole).toEqual('Employee');
        })
        // test getName()
        it('should return the name when a new Employee is initialized and the getName() function is called', () => {
            const employeeName = new Employee('Jack', 'id', 'email').getName();
            expect(employeeName).toEqual('Jack');
        })
        // test getId()
        it('should return the id when a new Employee is initialized and the getId() function is called', () => {
            const employeeId = new Employee('name', '5', 'email').getId();
            expect(employeeId).toEqual('5');
        })
        // test getEmail()
        it('should return the email when a new Employee is initialized and the getEmail() function is called', () => {
            const employeeEmail = new Employee('name', 'id', 'jack@gmail.com').getEmail();
            expect(employeeEmail).toEqual('jack@gmail.com');
        })
    })
})