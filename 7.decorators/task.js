
const addThree = (a, b, c) => a + b + c;

//---------------------------
function cachingDecoratorNew(func) {
 let cache = [];
 function wrapper(...args) {
  const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент найден
          //console.log("Из кэша: " + cache[idx].value); 
          return "Из кэша: " + cache[idx].value;
      } else {
          let result = func(...args); // в кэше нет
            cache.push({["hash"]: hash ,["value"]: result}) ; // добавляем элемент 
              if (cache.length > 5) { 
                cache.shift();
                //удалить самый старый (первый) 
              }
            //console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;  
        }
      }
    return wrapper;
  }

//2

function debounceDecoratorNew(f, ms) {
 let isIgnore = false;
   return function (...args) {
    if (isIgnore) return;
    f.apply(this, args);
    isIgnore = true;
    setTimeout(() => { 
      isCooldown = false;
      f.apply(this, args);
     // console.timeEnd("tim");
    }, ms);
  };
}

//3

function debounceDecorator2(func, ms) {
  let isIgnore = false;
    function wrapper (...args) {
      if (isIgnore) return;
      func.apply(this, args);
      isIgnore = true;
      setTimeout(() => {
        isCooldown = false;
        wrapper.conts ++;
        return func.apply(this, args);
      }, ms);
    }
  wrapper.conts = 0;
  return wrapper;
}
