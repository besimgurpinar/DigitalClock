function digitalClock() {
  const clock = document.querySelector('.clock');
  
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let amPm = '';
    
    if (hours >= 12) {
      amPm = 'PM';
    } else {
      amPm = 'AM';
    }
    
    let twelveHour = '';
    
    if (hours > 12) {
      twelveHour = hours - 12;
    } else if (hours === 0) {
      twelveHour = 12;
    } else {
      twelveHour = hours;
    }
    
    clock.querySelector('.hours').innerHTML = twelveHour;
    clock.querySelector('.minutes').innerHTML = ('0' + minutes).slice(-2);
    clock.querySelector('.seconds').innerHTML = ('0' + seconds).slice(-2);
    clock.querySelector('.ampm').innerHTML = amPm;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

digitalClock();