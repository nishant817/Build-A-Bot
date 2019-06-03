export default {
  bind: (element, binding) => {
    if (binding.arg != 'position') {
      return;
    }

    Object.keys(binding.modifiers).forEach((key) => { // Object.keys(x) enumerates all the keys on x
      element.style[key] = '1px';
    });

    element.style.position = 'absolute';
    element.style.color = 'blue';
    // element.style.backgroundColor = 'lightBlue';
    // element.style.bottom = '5px';
    // element.style.right = '5px';
  },
};
