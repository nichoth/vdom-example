# decoupled UI components

Decouple state, markup, and rendering engine for reusable UI components. This follows the basic pattern in [Raynos/mercury](https://github.com/Raynos/mercury/), but further decoupled. Is this useful in practice? It depends on view engines subscribing to the `h(tag, props, children)` pattern.


Use a component with default view library:
```js
var component = require('vdom-example');
```

Pass in a view engine:
```js
var h = require('virtual-dom/h');
var component = require('vdom-example/MyComponent.js');
component.render = component.render.bind(null, h);
```

Pass in a view engine and a render function:
```js
var React = require('react');
var h = React.createElement;
var component = require('vdom-example/lib/state.js');
component.render = myRenderFn.bind(null, h);

myRenderFn(h, state) {
// Return a virtual-dom element
}
```
