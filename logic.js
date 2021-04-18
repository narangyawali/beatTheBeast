const rocks = document.querySelectorAll('.rock');
const beasts = document.querySelectorAll('.beast');
var scoreboard = document.querySelector('#score');
var button = document.querySelector('#button');
var timer = document.querySelector('.timer');
var score = 0;
var time =14;
var allowed = true;
var lastIndex = 12; //random value to run the loop for first time
var gameT;



function randomTime(){

    let t = Math.round(Math.random() *(1000-500) + 500);
    return t;
}

function randomRock(){
    var index = Math.floor(Math.random()*6);
    if (index == lastIndex){
        console.log("this time two consitutive rocks were selected ")
        randomRock();
       
    }
    lastIndex = index;
    var beast = beasts[index];
    return beast;

}


function peep(){
    if (allowed ==true){
        console.log("peep called")
        var time = randomTime();
        var cBeast = randomRock();
        
        cBeast.classList.add('unhide');
        setTimeout(() => {
            cBeast.classList.remove('unhide'); 
            peep();
            
        }, time);
    
    }
   
}
function stPeep(){
    allowed = true;
    peep();
    button.style.visibility ="hidden";
    timeOut();
    gameTime();
}
function gameTime(){
     gameT = setInterval(()=>{
        timer.innerHTML ="time : "+ time--;
        
    },1000);
    
}

function timeOut(){
    
    setTimeout(()=>{
    allowed =false;
    console.log("ending this game or loop after ");
    button.style.visibility ="visible";
    clearInterval(gameT);
    time=15;
    },15000)
}
function beaten(){
    console.log("oh it hurts")
    score++ ;
    let scoreb = "Score : "+score;
    scoreboard.innerHTML = scoreb;
    this.classList.remove("unhide");

}

console.log("type of beasts is " + typeof(beasts));
console.log(beasts.length);
for(let beast of beasts){
    beast.addEventListener('click',beaten)
}

// beasts.forEach(beast => beast.addEventlistener("click",beaten))
button.addEventListener('click', stPeep);




