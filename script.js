let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

setInterval(()=>{
    // let date = new Date();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();

    // hrs.innerHTML = (hours<10?"0":"")+hours;
    // mins.innerHTML = (minutes<10?"0":"")+minutes;
    // secs.innerHTML = (seconds<10?"0":"")+seconds;
    let currentTime = new Date();
hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
mins.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
secs.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000);

