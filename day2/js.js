/* 
General edits suggested : 
    OLD____
      | - i was using " let " i all my code 
      |
      | - 


    NEW____
      | - using " const " improves the performance slightly:-
          because there is no changable or redeclareton in the entire script
*/




const clockhour = document.getElementById('hour');
const clockminute = document.getElementById('minute');
const clocksecond = document.getElementById('second');

function timeWork() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    console.log(time)

    // seconds
    
//  OLD CODE____
    //  |
    //  | ### the way i type it before ==============
    //  | const acSec = second / 60
    //  | const acSecDeg = acSec * 360
    //  |______

    // ### ai assesst information ====================
    //  if we notice : 360 / 6 = 60 
    //  so instead of multiply and divide we can semply do this :- 
    // changDeg(clocksecond, /*acSecDeg*/ second * 6)
    //                                 ^^^^^^ ^ ^ 
    //                                 like this^ 
    // and we can get the same result
    // or this 
    const secondDig = second * 6 ; 

    // console.log(`${acSec.toFixed(3)} , ${second} , ${acSecDeg}deg`)
    //=============================

    // minuts

    // NOTE : did the same as i did in line 13-31.
    // const acMin = minute / 60
    // const acMinDeg = acMin * 360
    // console.log(`${acMin.toFixed(3)} , ${minute} , ${acMinDeg}deg`)
    // changDeg(clockminute, /*acMinDeg*/ minute * 6) 
    const minDig = (minute * 6) + (second * 0.1) ;

    //=============================
    // hours

    // const hour12 = hour % 12; // Convert 24h to 12h format (0-11)
    // const achou = hour12 / 12; // Divide by 12 hours on the clock face instead of 23
    // const achouDeg = achou * 360;
    // console.log(`${achou.toFixed(3)} , ${hour12} , ${achouDeg}deg`)
    // changDeg(clockhour, achouDeg)
    const hourDig = ((hour % 12) * 30) + (minute * 0.5)
    //=============================

    // running all to rotate hands 

    clocksecond.style.transform = `rotate(${secondDig}deg)`
    clockminute.style.transform = `rotate(${minDig}deg)`
    clockhour.style.transform = `rotate(${hourDig}deg)`
}

// function changDeg(ele, deg) {
//     ele.style.transform = `rotate(${deg}deg)`;
// }

timeWork()

setInterval(timeWork, 1000);