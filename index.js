const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js')
const Triangle = require('./lib/triangle.js')
const Square = require('./lib/square.js')

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
        //converting the answers into variables
        var shape = answers.shape;
        var shapeColor = answers['shape-color'];
        var text = answers.text;
        var textColor = answers['text-color']; 
    
        var newShape
        //if statement decides what shape to make
        if (shape === 'triangle') {
            newShape = new Triangle(shapeColor, text, textColor);
        } else if (shape === 'square') {
            newShape = new Square(shapeColor, text, textColor);
        } else {
            newShape = new Circle(shapeColor, text, textColor);
        }
        //places info into the svg template
        var svgContent = newShape.svgRender();
        //writes the svg template content into a file
        fs.writeFile('logo.svg', svgContent, (err) =>
            err ? console.error(err) : console.log('Success! Generated logo.svg!')
        );
    });