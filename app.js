        const playBtn = document.getElementById("play");
        
        let msec = 0;
        let sec = 0;
        let min = 0;
 playBtn.addEventListener("click", () => {
   
    if (playBtn.classList.value == "fas fa-play display-2 text-light"){
        playBtn.classList.value = "fas fa-pause display-2 text-light"
        timeInterval = setInterval(increase, 10);
        
        
    }
    else {
        playBtn.classList.value = "fas fa-play display-2 text-light";
        clearInterval(timeInterval);
         
    }

    })

    document.getElementById("stop").addEventListener("click", () => {
        
        if (playBtn.classList.value == "fas fa-play display-2 text-light"){
            restart();
        }
    }) 
 
 
const increase = () => {
    if (msec <= 100) {
        msec++;
    
    }
    if (sec <= 60 && msec == 100){
        msec = 0;
        sec++;
    }
    if (min <= 60 && sec == 60) {
        sec = 0;
        min ++;
    }
    if (min == 60) {
        restart();
    }
    document.getElementById("min").innerText = min < 10 ? "0" + min : min ;
    document.getElementById("sec").innerText = sec < 10 ? "0" + sec : sec;
    document.getElementById("msec").innerText = msec < 10 ? "0" + msec : msec;
}

const restart = () => {
    clearInterval(timeInterval);
    msec = 0;
    sec = 0;
    min = 0;
    document.getElementById("min").innerText =  "00"
    document.getElementById("sec").innerText =  "00"
    document.getElementById("msec").innerText = "00"
}