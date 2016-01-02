module.exports = function(h, state) {
  return h('div.my-component', [
    h('input', { type: 'text', value: state.value }, [])
  ]);
};
