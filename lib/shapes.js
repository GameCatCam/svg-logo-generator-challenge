class Shapes {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    svgRender() {
        if (this.shape === 'triangle') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 250,200 50,200" fill="${this.shapeColor}" />
                <text x="150" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        } else if (this.shape === 'square') {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,0 50,200 250,200, 250,0" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        } else {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        }
    }
}

module.exports = Shapes;