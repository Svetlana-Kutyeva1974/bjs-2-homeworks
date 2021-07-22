class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
/*
  addClock (timeString, func, id) {
    if (id === undefined) {
      throw new Error('Не возможно идентифицировать будильник. Не передан id');
    }
    for (let i in this.alarmCollection) {
      if (this.alarmCollection[i] === id) {
        console.log("Будильник существует!!!!\n" + i + this.alarmCollection[i]);
        console.error('Будильник существует');
        break;
      }
    }
    this.alarmCollection.push({time : timeString, callback : func, id : id});
  }
  */
  //1рабочий вариант c циклами и ошибкой при одинаковых

  addClock (timeString, func, id) {
    if (id === undefined) {
      throw new Error('Не возможно идентифицировать будильник. Не передан id');
    }
    let findAlarms = this.alarmCollection.filter((item) => 
      { item.id === id;
      });
    //if (!findAlarm) {
      if (findAlarms.length === 0) {
       this.alarmCollection.push({time : timeString, callback : func, id : id});
     } 
     else {
      console.error("уже существует !!!!");
    }
  }//2 рабочий вариант c ошибкой при одинаковых

  removeClock(id) {
    let findAlarm = this.alarmCollection.filter((item) => item.id === id);
    if (findAlarm != -1) {
     this.alarmCollection.splice(this.alarmCollection.findIndex(i => i === findAlarm), 1);
     console.log('Будильник существует');
     return true;
   }
   else {
    return false;
  }
}

getCurrentFormattedTime() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  if (hours < 10) { hours = "0" + hours;}
  if (minutes < 10) { minutes = "0" + minutes;}
  return `${hours}:${minutes}`;
  //return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
}

start() {
  let currentTime = this.getCurrentFormattedTime();
  console.log("start" + currentTime + this.timerId);

      function checkClock(alarm) {
        if (alarm.time === currentTime) {
          alarm.callback();
        }

        if (this.timerId === null) {
          this.timerId = setInterval(this.alarmCollection.forEach((alarm) => {
            checkClock(alarm);
          }), 10000000);
     }
   };

  }

stop() {
  if (this.timerId !== null)
    clearInterval(this.timerId);
    this.timerId = null;
}

printAlarms() {
  this.alarmCollection.forEach((item, index, array) => {
    console.log(`Будильник заведен на ${item.time} id ${item.id}`);
  });
}

clearAlarms() {
  this.alarmCollection.length = 0;
}
}