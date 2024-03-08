var timer = 60;
var Score = 0;

var hitrn = 0;

function increaseScore(){
    Score += 10;
    document.querySelector("#scoreval").textContent = Score;
}

function getNewHit(){
  hitrn =  Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter = "";


for(var i = 1; i<=119; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class = "bubble">${rn}</div>`;


}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
 var timerint =  setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;

    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
   },1000)
}


document.querySelector("#pbtm")
.addEventListener("click",function(dets){
//   alert("chal raha hai");
  var clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
})

runTimer();

makeBubble();

getNewHit();

increaseScore();


//event bubbling---jispe click karoge wo element par event raise hoga, aur event listtener naa milne par event element ke parent par listener dhundhega, wha bhi naa milne par event parent ke parent ke parent par listner dhundega

// math.random() apko find kr k dega 0 se 1 v between ka no
// Math.floor(1.2) --me ap koi v aisa no pass karoge jisme point ho vo point hta dega for example--Math.floor(3.4) then we obtained the result is 3