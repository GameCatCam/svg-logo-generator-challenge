const Triangle = require('../triangle');

describe('Triangle', () => {
    // fills in a circle object and checks to see if the info was applied correctly
    it('should create a triangle with the correct properties', () => {
        const triangle = new Triangle('red', 'ABC', 'blue');

        expect(triangle.shape).toBe('triangle');
        expect(triangle.shapeColor).toBe('red');
        expect(triangle.text).toBe('ABC');
        expect(triangle.textColor).toBe('blue');
    });
    // generates a template and checks to see if the info fills in correctly
    it('should generate the correct SVG for a triangle', () => {
        const triangle = new Triangle('green', 'XYZ', 'orange');
        const svg = triangle.svgRender();

        expect(svg).toContain('<polygon');
        expect(svg).toContain('fill="green"');
        expect(svg).toContain('fill="orange"');
        expect(svg).toContain('XYZ');
    });
});