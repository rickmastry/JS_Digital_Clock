function showKenyaTime(){
    let date = new Date();
    let africa =  { timeZone: 'Africa/Nairobi' }
    let kenyaTime = new Date(date.toLocaleString("en-US", africa));
    

    let hours = kenyaTime.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);

    hours = checkTime(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('clock-two').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
}


function showTime(){
    let date = new Date();
    let america =  { timeZone: 'America/New_York' }
    let americaTime = new Date(date.toLocaleString("en-US", america));
    let hours = americaTime.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);

    hours = checkTime(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
}

function convertFormat(time){
   let format = 'AM';

   if(time >= 12){
       format = 'PM'
   }
   return format;
}

function checkTime(time){
    if(time > 12 ){
        time = time - 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;

}

showKenyaTime();
showTime();
setInterval(showTime,1000)
setInterval(showKenyaTime, 1000)