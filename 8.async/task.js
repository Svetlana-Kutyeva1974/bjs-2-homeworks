class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (timeString, func, id) {
    if (id === undefined) {
      throw new Error('Не возможно идентифицировать будильник. Не передан id');
    }
    const findAlarm2 = this.alarmCollection.findIndex((item) => item.id === id);
    if (findAlarm2 === -1) {
     this.alarmCollection.push({time : timeString, callback : func, id : id});
    } 
    else {
      console.error("уже существует !!!!");
    }
  }

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
  }

  start() {

    let checkClock = alarm => {
     let currentTime = this.getCurrentFormattedTime();
      if (alarm.time === currentTime) {
        alarm.callback();
        //return console.log(`Будильник сработал на ${alarm.time} id ${alarm.id}`);
      } 
    }

    if (this.timerId === null) {
      this.timerId = setInterval(this.alarmCollection.forEach((alarm) =>
        checkClock(alarm)), 3000);
      /*
      Для стрелочной функции bind не используем, а если используем, то привязка к коллекции, а не к alarm:
      this.timerId = setInterval(this.alarmCollection.forEach((alarm) =>
        checkClock.bind(this.alarmCollection)), 3000);
        */
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
    this.timerId = null;
  }

  printAlarms() {
    this.alarmCollection.forEach((item, index, array) => 
      console.log(`Будильник заведен на ${item.time} id ${item.id}`));
  }

  clearAlarms() {
    this.alarmCollection = [];
  }
}