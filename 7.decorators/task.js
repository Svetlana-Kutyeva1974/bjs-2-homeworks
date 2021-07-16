
//const addThree = (a, b, c) => a + b + c;

//---------------------------
function cachingDecoratorNew(func) {
 let cache = [];
 function wrapper(...args) {
  const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент не найден
        //console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].value;
      } else {
        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push({["hash"]: hash ,["value"]: result}) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift();
          //если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        //console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
      }
    }
    return wrapper;
  }

//2

function debounceDecoratorNew(func, ms) {
 let timeout;
 return function (...args) {
   clearTimeout(timeout);
   timeout = setTimeout(() => {
     f.apply(this, args);
     console.timeEnd("tim");
     console.time("tim");
   }, ms);
 };
}

//3

function debounceDecorator2(func, ms) {
 let timeout;
 function wrapper (...args) {
   clearTimeout(timeout);
   timeout = setTimeout(() => {
     wrapper.conts ++;
     return func.apply(this, args);
     console.timeEnd("tim");
     console.time("tim");
   }, ms);
 }
 wrapper.conts = 0;
 return wrapper;
}
