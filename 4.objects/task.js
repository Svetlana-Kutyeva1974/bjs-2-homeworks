function Student(name, gender, age) {
 this.name = name;
 this.gender = gender;
 this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = [mark]; 
    } else
     {
       this.marks[this.marks.length] = mark;
    }
};

Student.prototype.addMarks = function (... mark) {
  if (this.marks === undefined) { 
    this.marks = [mark[0]];
    } 
   this.marks = mark.map((item, index, arr) => arr[index] = mark[index] );
};


Student.prototype.getAverage = function () {
  return this.marks !== undefined && this.marks.reduce((acc, item, idx, arr) => {
  acc += item;
  if (idx === arr.length - 1) {
    return acc / arr.length;
  }
    else {
      return acc;
    }
})
};

Student.prototype.exclude = function(reason) {
  delete  this.marks;
  delete this.subject;
  this.excluded = reason;
};