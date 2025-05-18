let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"]

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    level++;
    userSeq = [];
    h3.innerText= `Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randClr=btns[randIdx];
    let randBtn=document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
       if(gameSeq.length==userSeq.length){
        setTimeout(levelUp, 1000);  
       }
    } else{
        h3.innerHTML= `Game over!<b> your score was ${level} <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor='#FF5252';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        },180);
        reset();
    }
}

function btnpressed(){
    console.log(this);
    let btn= this;
    userFlash(btn);
    let userClr=btn.getAttribute("id");
    userSeq.push(userClr);
    console.log(userSeq);
    gameAns(userSeq.length-1);

}

let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click",btnpressed);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}