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
  constructor(...args) {
    super(...args);
    this.type = "magazine";
  }
  }

class Book extends PrintEditionItem {
 constructor(author, ...args) {
    super(...args);
    this.author = author;
    this.type = "book";
  }
  }

  class NovelBook extends Book {
    constructor(...args) {
    super(...args);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = "detective";
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
  this.books.push(book);

 }
}

findBookBy(types, value) {
 let tt = {};
 tt = this.books.find(book => book[types] === value);
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

}//library

//3*
class Student {
  constructor(name) {
    this.name = name;
    this.objectOfMarks = {};
  }

  addGrade(mark, subjectName) {
   
    if (mark>0 && mark <6) {
      if (!this.objectOfMarks[subjectName]) {
      this.objectOfMarks[subjectName] = [];
      }
        this.objectOfMarks[subjectName].push(mark);
    }
    else {
        alert(" Oшибка ввода оценки");
      }
    
  }//func
 
  getAverage() {
    let acc = 0;
    let length = 0;
    for (let key in this.objectOfMarks) {
          for (let prop in this.objectOfMarks[key]){
            acc += this.objectOfMarks[key][prop]; 
            length += 1;
           }
      }
      return acc / length;
   }

  getAverageBySubject(subjectName) {
    return this.objectOfMarks != undefined && this.objectOfMarks[subjectName].reduce((acc, item, idx, arr) => {
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
