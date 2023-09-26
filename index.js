const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js')


inquirer
    .prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'What characters do you want displayed on your logo? (Please choose up to three)'
        },
        {
            type: 'input',
            name: 'text-color',
            message: 'What color would you like this text to be? (Use a color name or hexadecimal).'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape do you want your logo to be?',
            choices: [new inquirer.Separator(), 'triangle', 'square', 'circle']
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'What color would you like the shape to be? (Use a color name or hexadecimal)'
        }
    ])
    .then((answers) => {
        var shape = answers.shape;
        var shapeColor = answers['shape-color'];
        var text = answers.text;
        var textColor = answers['text-color']; 
    
        var newShape = new Shape(shape, shapeColor, text, textColor);
        var svgContent = newShape.svgRender();
    
        fs.writeFile('logo.svg', svgContent, (err) =>
            err ? console.error(err) : console.log('Success! Generated logo.svg!')
        );
    });