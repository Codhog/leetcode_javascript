var arr1 = [[[2, 3, 4]]];

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr;
}


console.log(flatDeep(arr1, Infinity));
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]