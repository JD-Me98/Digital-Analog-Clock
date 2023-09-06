const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

setInterval(function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12){
        h = h-12;
        ampm="PM";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    updateClock();
},1000);


//analog clock
const hoursEl = document.getElementById("Hours");
const minEl = document.getElementById("min");
const secsEl = document.getElementById("secs");
let i= new Date().getSeconds();

setInterval(function(){
    let hs = new Date().getHours();
    let ms = new Date().getMinutes();
    let sc = new Date().getSeconds();
    i = (sc * 6) + 90;
    j = (ms * 6) + 90;
    k = (hs * 30) + 90;
    if(i<450){
        secsEl.style.transform = "rotate("+i+"deg)";
        minEl.style.transform = "rotate("+j+"deg)";
        hoursEl.style.transform = "rotate("+k+"deg)";
    }
    else{
        i=90;
    }
    
  }, 1000);
