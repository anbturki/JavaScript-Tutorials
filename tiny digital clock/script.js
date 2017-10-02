var timeEl = document.getElementById('time');
// We added this for work on page opend
var time = getCurrentTime();
timeEl.innerText = time;

setInterval(function(){

    // GET TIME STRING
    var time = getCurrentTime();
    // Replace the current text
    timeEl.innerText = time;

},1000);
function getCurrentTime(){
    // Get the current time
    var dateOBJ = new Date();
    // Serialize clock time
    var time = {
        hours:dateOBJ.getHours(),
        minutes:dateOBJ.getMinutes(),
        seconds:dateOBJ.getSeconds(),
        tt:'AM'
    }
    // convert to 12 time
    if(time.hours == 12){
        time.ampm = 'PM';
    }else if(time.hours > 12){
        time.hours -= 12;
        time.tt = 'PM'
    }
    // Prepend a 0 on the hours to make double digits
    if(time.hours < 10){
        time.hours = '0'+time.hours
    }
    // Prepend a 0 on the Minutes to make double digits
    if(time.minutes < 10){
        time.minutes = '0'+time.minutes
    }
    // Prepend a 0 on the Seconds to make double digits
    if(time.seconds < 10){
        time.seconds = '0'+time.seconds
    }

    // Format the click time as a string "hh:mm:ss tt"
    return time.hours + ':' + time.minutes + ':' + time.seconds + ' ' + time.tt
}
