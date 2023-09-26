const Shape = require('./shapes.js')
//class for making squares
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
        this.shape = 'square';
    }
    // svg template
    svgRender() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,0 50,200 250,200, 250,0" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

module.exports = Square;