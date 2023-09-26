const Square = require('../square');

describe('Square', () => {
    // fills in a circle object and checks to see if the info was applied correctly
    it('should create a square with the correct properties', () => {
        const square = new Square('red', 'ABC', 'blue');

        expect(square.shape).toBe('square');
        expect(square.shapeColor).toBe('red');
        expect(square.text).toBe('ABC');
        expect(square.textColor).toBe('blue');
    });
    // generates a template and checks to see if the info fills in correctly
    it('should generate the correct SVG for a square', () => {
        const square = new Square('green', 'XYZ', 'orange');
        const svg = square.svgRender();

        expect(svg).toContain('<polygon');
        expect(svg).toContain('fill="green"');
        expect(svg).toContain('fill="orange"');
        expect(svg).toContain('XYZ');
    });
});