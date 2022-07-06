const Engineer = require('../engineer');

describe('Engineer', () => {
    describe('Initialization & Get functions', () => {
        // test getRole()
        it('should return the role type when a new Engineer is initialized and the getRole() function is called', () => {
            const engineerRole = new Engineer('name', 'id', 'email', 'github').getRole();
            expect(engineerRole).toEqual('Engineer');
        })
        // test getName()
        it('should return the name when a new Engineer is initialized and the getName() function is called', () => {
            const engineerName = new Engineer('Jack', 'id', 'email', 'github').getName();
            expect(engineerName).toEqual('Jack');
        })
        // test getId()
        it('should return the id when a new Engineer is initialized and the getId() function is called', () => {
            const engineerId = new Engineer('name', '5', 'email', 'github').getId();
            expect(engineerId).toEqual('5');
        })
        // test getEmail()
        it('should return the email when a new Engineer is initialized and the getEmail() function is called', () => {
            const engineerEmail = new Engineer('name', 'id', 'jack@gmail.com', 'github').getEmail();
            expect(engineerEmail).toEqual('jack@gmail.com');
        })
        // test getGithub()
        it('should return the github when a new Engineer is initialized and the getGithub() function is called', () => {
            const engineerGithub = new Engineer('name', 'id', 'email', 'JackYouk').getGithub();
            expect(engineerGithub).toEqual('JackYouk');
        })
    })
})

