// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  // Ваш код
  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = 0;
  // Ваш код
for (let i = 0; i < arr.length; i++) {
  if (arr[i]>max) {
    max = arr[i];
  }
    else if (arr[i]<min) {
      min = arr[i];
    }
sum += arr[i];
}
avg += sum / arr.length;
  return { min:min, max:max, avg:avg.toFixed(2) };
}

// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // Ваш код
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3

function worker2(arr) {
  // Ваш код
  let rezult = getArrayParams(arr);
  let differenceMaxMin = Math.abs(Math.abs(rezult.max) - Math.abs (rezult.min));
  return differenceMaxMin;
}
