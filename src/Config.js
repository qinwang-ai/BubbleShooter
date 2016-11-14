exports.bubble = {
    types: [
        'resources/images/red.png',
        'resources/images/blue.png',
        'resources/images/purple.png',
        'resources/images/green.png',
        'resources/images/yellow.png',
        'resources/images/key.png'
    ],
    radius: 17,
    radius2: 19.63
};
exports.globalSize = {
    width: 330,
    height: 680
}
exports.bias = 1;
exports.Hexagon = [
    {s: 0, t: 1.0472},
    {s: 1.0473, t: 2.0943},
    {s: 2.0944, t: 3.1416},
    {s: -3.1416, t: -2.0944},
    {s: -2.0943, t: -1.0473},
    {s: -1.0472, t: 0}
];
// relative to Hexagon
exports.Edge = [
    {dx: 1.5 * this.bubble.radius2, dy: this.bubble.radius},
    {dx: 0, dy: 2 * this.bubble.radius},
    {dx: -1.5 * this.bubble.radius2, dy: this.bubble.radius},
    {dx: -1.5 * this.bubble.radius2, dy: -this.bubble.radius},
    {dx: 0, dy: -2 * this.bubble.radius},
    {dx: 1.5 * this.bubble.radius2, dy: -this.bubble.radius}
];
