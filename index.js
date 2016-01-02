var c = require('./MyComponent.js');
var h = require('virtual-dom/h');
c.render = require('./lib/render.js').bind(null, h);

module.exports = c;
