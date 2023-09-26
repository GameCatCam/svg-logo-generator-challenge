const Shape = require('./shapes.js')
// Class for making a triangle logo
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shape = 'triangle';
    }
    // info for the template that gets placed into the fs.writeFile
    svgRender() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 250,200 50,200" fill="${this.shapeColor}" />
                <text x="150" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

module.exports = Triangle;