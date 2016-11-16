GLOBAL.TYPES = [
        'resources/images/red.png',
        'resources/images/blue.png',
        'resources/images/purple.png',
        'resources/images/green.png',
        'resources/images/yellow.png',
        'resources/images/key.png'
    ];
GLOBAL.BUBBLE_RADIUS = 17;
GLOBAL.BUBBLE_RADIUS2 = 19.63;
GLOBAL.SCREEN_SIZE = {
    width: 330,
    height: 590
}
GLOBAL.LOSE_LINE = 340;
GLOBAL.BULLET_PARTICLE = [
    'resources/images/red_particle.png',
    'resources/images/blue_particle.png',
    'resources/images/purple_particle.png',
    'resources/images/green_particle.png',
    'resources/images/yellow_particle.png'
]
exports.keyType = 5;
exports.numberOfColor = 5;
exports.bias = 1;
exports.bulletSpeedDelay = 1200;
exports.bulletMagnLength = 1000;
exports.initBubbleAreaHeight = 0.4;
exports.serverUrl = 'http://scientist2031.com/server.php';
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
    {dx: 1.5 * GLOBAL.BUBBLE_RADIUS2, dy: GLOBAL.BUBBLE_RADIUS},
    {dx: 0, dy: 2 * GLOBAL.BUBBLE_RADIUS},
    {dx: -1.5 * GLOBAL.BUBBLE_RADIUS2, dy: GLOBAL.BUBBLE_RADIUS},
    {dx: -1.5 * GLOBAL.BUBBLE_RADIUS2, dy: -GLOBAL.BUBBLE_RADIUS},
    {dx: 0, dy: -2 * GLOBAL.BUBBLE_RADIUS},
    {dx: 1.5 * GLOBAL.BUBBLE_RADIUS2, dy: -GLOBAL.BUBBLE_RADIUS}
];

