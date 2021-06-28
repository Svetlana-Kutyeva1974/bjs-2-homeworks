"use strict";
function solveEquation(a, b, c) {
  let arr, d, x, x1, x2;
  arr = [];
  // код для задачи №1 писать здесь
  d = b**2 - ((4 * a) * c);
  //console.log(`дискриминант ${d}`);
  if (d > 0) {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    //console.log(x1 = (-b + Math.sqrt(d) )/(2*a) x2 = (-b - Math.sqrt(d) )/(2*a))
    //console.log(`первый корень ${x1} второй корень ${x2}`);
    arr[0] = x1;
    arr[1] = x2;
  } 
  else if (d === 0) {
    x = -b/(2*a);
    arr[0] = x ;
  }
  //else if (d < 0) {
   // return arr;
  //} 
  
  return arr; // array
}



  // код для задачи №2 писать здесь

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  let errorString = '';
  //if (typeof percent === "string" || typeof contribution === 'string' || typeof amount === 'string') {
  //  console.log(`Параметр "Процентная ставка" содержит неправильное значение ${percent}`);
  //}
  if (typeof percent === "string") {

    errorString += `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return errorString;
  }
    else if (typeof contribution === 'string') {
      errorString += `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
      return errorString;
    }
    else if (typeof amount === 'string') {
        errorString += `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
        return errorString;
    }
  else {
  // код для задачи №2 писать здесь
let bodyCredit, p;
bodyCredit = amount - contribution;
p = percent/12;
p = p/100;
//console.log(" проц ставка на 100 " + p);
let timeCredit = (date.getFullYear() - new Date().getFullYear()) * 12 - (new Date().getMonth() + 1) + (date.getMonth() + 1) ;
//console.log(" месяцев " + timeCredit);
let payment = bodyCredit * (p + p / (((1 + p) ** timeCredit) - 1));
totalAmount = timeCredit * payment;
//console.log(" платеж  и  сумма " + payment + "  " + (+totalAmount.toFixed(2)) );
return +totalAmount.toFixed(2);
  }
}

