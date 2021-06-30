function compareArrays(arr1, arr2) {
 return arr1.length === arr2.length && arr1.every((item, index, arr1) => {
      return arr1[index] === arr2[index];
      });
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((item, index) => { return item * 10; }
  );
}
