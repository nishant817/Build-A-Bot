// in this method of directive, we will we able to pass value for each args

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => { // Object.keys(x) enumerates all the keys on x
    element.style[position] = binding.value[position];
  });
}


// export default {
//    bind: (element, binding) => {
//       Object.keys(binding.value).forEach((position) => { //Object.keys(x) enumerates all the keys on x
//          element.style[position] = binding.value[position];
//       });
//    },
//    update: (element, binding) => {
//       Object.keys(binding.value).forEach((position) => { //Object.keys(x) enumerates all the keys on x
//          element.style[position] = binding.value[position];
//       });
//    },
// };
