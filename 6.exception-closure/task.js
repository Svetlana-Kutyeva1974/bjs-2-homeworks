function parseCount(stringForParcing) {
  let result = Number.parseInt(stringForParcing);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  else {
    return result;
  }
}

function validateCount(stringForParcing) {
  try {
    return parseCount(stringForParcing);
  } 
  catch (error) {
    return error;
  }  
}

//#2

class Triangle {
  constructor (a,b,c) {
    if (!(c < (a + b) && a < (c + b) && b < (c + a))) {
     throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    let trianglePerimeter = this.a + this.b + this.c;
    return (+trianglePerimeter.toFixed(3));
  }

  getArea() {
    let p = this.getPerimeter()/2;
    let triangleArea = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return (+triangleArea.toFixed(3));
  }
}//class

function getTriangle (a,b,c) {
  try {
    return new Triangle(a,b,c);
  } 
  catch (error) { 
    return {
      getArea() { 
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter() {
        return 'Ошибка! Треугольник не существует'; 
      }
    };
  }
}//getTriangle