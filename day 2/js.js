let clockhour = document.getElementById('hour');
let clockminute = document.getElementById('minute');
let clocksecond = document.getElementById('second');

function timeWork() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    // seconds

    let acSec = second / 60
    let acSecDeg = acSec * 360
    // console.log(`${acSec.toFixed(3)} , ${second} , ${acSecDeg}deg`)
    changDeg(clocksecond, acSecDeg)

    //=============================
    // minuts

    let acMin = minute / 60
    let acMinDeg = acMin * 360
    // console.log(`${acMin.toFixed(3)} , ${minute} , ${acMinDeg}deg`)
    changDeg(clockminute, acMinDeg)

    //=============================
    // hours

    let achou = hour / 23
    let achouDeg = achou * 360
    // console.log(`${achou.toFixed(3)} , ${hour} , ${achouDeg}deg`)
    changDeg(clockhour, achouDeg)

    //=============================
}

function changDeg(ele, deg) {
    ele.style.transform = `rotate(${deg}deg)`;
}

setInterval(timeWork, 1000);


