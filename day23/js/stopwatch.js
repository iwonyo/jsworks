let time = 0;
let sw = true;

$(document).ready(function(){
    stopWatch();
})

function init(){
    document.getElementById("time").innerHTML = "00:00:00";
}

function stopWatch(){
    let hour = 0, min = 0, sec = 0;
    let timer;

    $("#startbtn").click(function(){
        if(sw){
            $(".fa").css("color", "#f60")
            this.style.color = "#555";
            sw = false;

            if(time == 0){
                init();
            }

            timer = setInterval(function(){
                time++;

                min = Math.floor(time/60);
                hour = Math.floor(min/60);
                sec = time % 60;
                min = min % 60;

                let th = hour;
                let tm = min;
                let ts = sec;

                if(th < 10){
                    th = "0" + hour;
                }
                if(tm < 10){
                    tm = "0" + min;
                }
                if(ts < 10){
                    ts = "0" + sec;
                }

                document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
            }, 1000);
        }
    });
    $("#pausebtn").click(function(){
        if(time != 0){
            $(".fa").css("color", "#f60")
            this.style.color = "#555";
            clearInterval(timer);
            sw = true;
        }
    });
    $("#stopbtn").click(function(){
        if(time != 0){
            $(".fa").css("color", "#f60")
            this.style.color = "#555";
            clearInterval(timer);
            sw = true;
            time = 0;
            init();
        }
    });
}