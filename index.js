



// packages --------------------------------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');


// questions array
const questions = [
    {

    },
    {

    },
]

// inquirer
inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFile(`title.html`, `
        // html code
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        `, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
    })
