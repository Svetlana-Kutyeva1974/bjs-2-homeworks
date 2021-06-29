function compareArrays(arr1, arr2) {
 let result = arr1.every((item, index, arr1) => {
    let lengthArr = arr1.length;
     if (arr1.length > arr2.length || arr1.length < arr2.length) {
       return false;
       }
       else
       {
    if (arr1[index] === arr2[index])
    {
    return true;
    }
    else { 
      return false;
       } 
     }
  }
);
  return result; // boolean
}

function advancedFilter(arr) {
  let changeArr = arr.filter((item) => item >0 && item % 3 ===0);
  let resultArr = changeArr.map((item, index) => {
    const newArr = item * 10;
    return newArr;
  }
  );
  return resultArr; // array
}
