// stopwatch amader laptop or mobile er time er sate that means amader daily time er sate connected na. so new Date() method er kono dorker nai...

// akta var or let or const er modde onakgula variable name:"value" newa jai.
// 1 second = 1000 mili second
// 10 milisecond por por restart hole 1000/10 = milisecond e 100 show korbe.

// createElement() er bitor e je html tag ta dibo se tag ta automatically create kore pelbe.

var ms = 0, s = 0, m = 0, h = 0
var timer;

var display = document.querySelector(".timer-Display")
var laps = document.querySelector(".laps")


function start(){
    if(!timer){   // that means jokon display te timer start hove na tokon sodo start button ta kaj korbe ja.
        timer = setInterval(run, 10)
    }
}

function run(){
    display.innerHTML = getTimer()
    ms++                  // ms+=10 jodi di tahole tahole ms == 1000 dite hove 100 er bodole.
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    // if(h == 13){    // not necessary for stopwatch.
    //     h = 1
    // }

   
}

function pause(){
    // clearInterval(timer)
    // timer = false  // because start kaj korbe jokon displayte kono time takbe na tokon..
    stopTimer()
    
}

function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}

function stopTimer(){
    clearInterval(timer)
    timer = false 
}

function getTimer(){
    // display.innerHTML = (h<10 ? "0" + h: h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms); 
    // display.innerHTML = ai portion ta likte hove na construction part e.

    return (h<10 ? "0" + h: h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms); 
}



// Restart button dia reset howar sate sate start hobe.
function restart(){
    if(timer){  // means jokon display te timer calo takbe tokon. Ami nij teke tik korci.
        reset()
        start()
   
    }
   
    
    // According to tutorial
    // reset()
    // start()
    

}


// lap = taking screenshot of current time...

function lap() {
    if(timer) {   
        var Li = document.createElement("li")    // createElement. je element ta html e deka jave na. but display te deka jave.
        Li.innerHTML = getTimer()   // element ter modde value pass kora.
        laps.appendChild(Li)   // element ta kotai kiser modde show korbe saita dekano. and append dia bujai je ager value ta o takbe and new value add hove. Child dia bujai je (li) holo ul er child.
    }
}

function resetLap(){
    laps.innerHTML = ""
}
