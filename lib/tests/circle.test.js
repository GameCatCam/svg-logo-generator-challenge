const Circle = require('../circle');

describe('Circle', () => {
    // fills in a circle object and checks to see if the info was applied correctly
    it('should create a circle with the correct properties', () => {
        const circle = new Circle('red', 'ABC', 'blue');

        expect(circle.shape).toBe('circle');
        expect(circle.shapeColor).toBe('red');
        expect(circle.text).toBe('ABC');
        expect(circle.textColor).toBe('blue');
    });
    // generates a template and checks to see if the info fills in correctly
    it('should generate the correct SVG for a circle', () => {
        const circle = new Circle('green', 'XYZ', 'orange');
        const svg = circle.svgRender();

        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="green"');
        expect(svg).toContain('fill="orange"');
        expect(svg).toContain('XYZ');
    });
});