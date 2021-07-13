class PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;

  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    }
      else if (value > 100)
      {
      this._state = 100;
      }
      else {
  
    this._state = value;
  }
  }


fix() {
  this.state = 1.5 * this.state;
}
}



class Magazine extends PrintEditionItem {
   get type() {
    return this._type;
  }

  set type(value) {
     this._type = "magazine";
  }
  }

  class Book extends PrintEditionItem {
 constructor(author, ...args) {
    super(...args);
    this.author = author;
  }

   get type() {
    return this._type;
  }

  set type(value) {
     this._type = "book";
  }
  }

  class NovelBook extends Book {

  get type() {
    return this._type;
  }
  set type(value) {
    this._type = "novel";
  }
}

class FantasticBook extends Book {

  get type() {
    return this._type;
  }
  set type(value) {
    this._type = "fantastic";
  }
}

class DetectiveBook extends Book {

  get type() {
    return this._type;
  }
  set type(value) {
    this._type = "detective";
  }
}

//---------------------------
class Library {

  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
 if (book.state > 30) {
  this.books[this.books.length] = book;
 }
}

findBookBy(types, value) {
  function getCharacter(types) {
  return character => character[types] === value;
}
 let p = '';
 let tt = {};
 tt = this.books.find(getCharacter(types));
return tt || null;
}

giveBookByName(bookname) {
  let bookFind = this.findBookBy('name', bookname);
  if (bookFind !== null){
  this.books.splice(this.books.findIndex(i => i == bookFind), 1);
  return bookFind;
 }
 else {
  return null;
}
}


}

/*
class Student {
  constructor(name) {
    this.name = name;
    
    //this.gender = gender;
    //this.age = age;
    this.objectOfMarks = [{subjectName: '', marks: []}];
    //{subjectName: '', marks: []}
  }


  addGrade(mark, subjectName) {
   
    if (this.objectOfMarks[this.objectOfMarks.length-1].subjectName === undefined) {
      
      this.objectOfMarks[this.objectOfMarks.length-1].subjectName = subjectName;
    
    }
    else {
      if (mark>0 && mark <6){
        this.addGrades(mark, subjectName);
      }
      else {
        alert(" Oшибка ввода оценки");
      }

    }
  }

  addGrades(mark, subjectName) {
    if (this.objectOfMarks.marks === undefined) {
      // добавить первую оценку 
      this.objectOfMarks.marks = [mark];
      
    } else {
      //this.objectOfMarks.marks[this.objectOfMark.marks.length] = mark;
      this.objectOfMarks.marks.push(mark);
    }

  }
  */

class Student {
  constructor(name) {
    this.name = name;
    
    //this.gender = gender;
    //this.age = age;
    this.objectOfMarks = [];
    //this.objectOfMarks = [{subjectName: '', marks: []}];
    //{subjectName: '', marks: []}
  }


  addGrade(mark, subjectName) {
   
    if (this.objectOfMarks.length === 0 && mark>0 && mark <6) {
     
      this.objectOfMarks.push({[subjectName]: [mark]});
      //this.objectOfMarks[this.objectOfMarks.length][subjectName] = subjectName;
     

    }
    else {
     if (mark>0 && mark <6){
        this.addGrades(mark, subjectName);
      }
      else {
        alert(" Oшибка ввода оценки");
      }
     
    }
  }

  addGrades(mark, subjectName) {
   
   

      for (let key in this.objectOfMarks) {
        
          for (let prop in this.objectOfMarks[key]){

            if (prop === subjectName) {
           
            this.objectOfMarks[key][prop].push(mark); return;
           }
          
            
        
          }
      }
       this.objectOfMarks.push({[subjectName]: [mark]});
   }

 
  /*getAverage() {
    return this.objectOfMarks != undefined && this.objectOfMarks.reduce((acc, item, idx, arr) => {
      acc += item;
      if (idx === arr.length - 1) {
        return acc / arr.length;
      }
      else {
        return acc;
      }
    })
  }*/
  getAverage() {
    let acc = 0;
    let length = 0;
    for (let key in this.objectOfMarks) {
        console.log("ищем    " + key);
          for (let prop in this.objectOfMarks[key]){
            acc += this.objectOfMarks[key][prop]; 
            length += 1;
           }
      }
      return acc / length;
   }

  getAverageBySubject(subjectName) {
    return this.objectOfMarks != undefined && this.objectOfMarks.filter((item) => item === subjectName).reduce((acc, item, idx, arr) => {
      acc += item;
      if (idx === arr.length - 1) {
        return acc / arr.length;
      }
      else {
        return acc;
      }
    })

  }

  
}
