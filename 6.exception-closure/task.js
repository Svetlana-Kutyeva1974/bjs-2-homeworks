function parseCount(stringForParcing) {
  let result = Number.parseInt(stringForParcing);
  if (isNaN(result)) {
  let pError = new Error("Невалидное значение");
  throw pError;
  }
else return result;
}

function validateCount(stringForParcing) {
  try {
    return parseCount(stringForParcing);
}catch (error){
  return error;
}
}

//#2

class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
   get c() {
    return this._c;
  }

  set c(value) {

    if (value < (this.a + this.b) && (this.a < (value + this.b)) && (this.b < (value + this.a))) {
      this._c = value;
    }
    else  {
    
      let trError2 = new Error("Треугольник с такими сторонами не существует");
      throw trError2;
      
      }
}//setc

  getPerimeter(){
    
    let trianglePerimeter = this.a + this.b +this.c;
    return (+trianglePerimeter.toFixed(3)) ;

}

  getArea(){
    let p = this.getPerimeter()/2;
    let triangleArea = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return (+triangleArea.toFixed(3));
  }

}//class

  function getTriangle(a1,b1,c1) {
    let newTtiangle;
    newTtiangle = new Triangle(a1,b1,c1);
    try {
      return newTtiangle;
    }catch (error){
      let objError = {
        sms: "Ошибка! Треугольник не существует",
        getArea: function () { return alert(this.sms); },
        getPerimeter() {return  alert(this.sms); }
      };
      return objError ;
}
}//getTriangle

