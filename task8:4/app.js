
 //Create a basic HTML file with any elements you deterine if you can get any benfits from them and include the script tag to your file[app.js]
 // try to fetch the current time in this format [hh:mm:ss] => [hour: min: sec]. hint: you need to use google to check what the correct function is 
// use this function [setInterval()] to make sure the time stays current .. hint: you need to use google or you can ask me once you give up..
 // check how to run the function when you load the page..
 
 
 var second = 1000;

 function pad(num) {
    return ('0' + num).slice(-2);
  }

 function updateClock() {
    var clockEl = document.getElementById('demo'),
      dateObj = new Date();
    clockEl.innerHTML = pad(dateObj.getHours()) + ':' + pad(dateObj.getMinutes()) + ':' + pad(dateObj.getSeconds());
  }

  setInterval(updateClock, second);