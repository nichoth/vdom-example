var struct = require('observ-struct');

module.exports = MyComponent;

function MyComponent(opts) {
  opts = opts || {};
  var s = struct({
    value: observ(opts.value || '')
  });

  return s;
}
