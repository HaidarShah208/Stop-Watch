var isStop = true;
let intervalId;
var clock = document.getElementById('clck')
let min = 0,
    sec = 0,
    hr = 0;



//start
function start() {
    if (isStop == true) {
        isStop = false
        timer()
    }
}

function timer() {
    if (isStop == false) {
        sec++
        if (sec == 60) {
            sec = 0
            min++
        }
        if (min == 60) {
            min = 0
            hr++
        }
        if (hr > 12) {
            hr -= 12
        }
        hors = String(hr).padStart(2, '0');
        minsts = String(min).padStart(2, '0');
        seconds = String(sec).padStart(2, '0');
        clock.innerHTML = hors + ':' + minsts + ':' + seconds;
        setTimeout("timer()", 1000)
    }
};


//stop
function stop() {
    isStop = true
}

//reset
function reset() {
    stop()
    sec = 0;
    min = 0
    hr = 0
    clock.innerHTML = '00:00:00'
}