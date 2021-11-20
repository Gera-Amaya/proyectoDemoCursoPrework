

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const LOST = 1;
const WIN = 2;


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});

paperBtn.addEventListener("click", ()=>{
    play(PAPER);
});

scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS);
});

function play(userOption){
    userImg.src = "piedra papel o tijera imagenes/"+userOption+".svg";

    resultText.innerHTML = "¡Choosing!";

    const interval = setInterval(function (){
        const machineOption = calcMatchineOprion();
        machineImg.src = "piedra papel o tijera imagenes/"+machineOption+".svg";
    }, 150);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMatchineOprion();
        const result = calcResult(userOption, machineOption)
    
        
        machineImg.src = "piedra papel o tijera imagenes/"+machineOption+".svg";
    
        switch(result) {
            case TIE:
                resultText.innerHTML = "!You Tied¡"
                break;
            case WIN:
                resultText.innerHTML = "!You Win¡"
                break;
            case LOST:
                resultText.innerHTML = "!You Lost¡"
                break;
        }
    }, 1500);

}

function calcMatchineOprion(){
    const number = Math.floor(Math.random() * 3)
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}



function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;

    }else if(userOption === ROCK){
        if(machineOption === PAPER) return LOST;
        if(machineOption === SCISSORS) return WIN;

    }else if(userOption === PAPER){
        if(machineOption === SCISSORS) return LOST;
        if(machineOption === ROCK) return WIN;

    }else if(userOption === SCISSORS){
        if(machineOption === ROCK) return LOST;
        if(machineOption === PAPER) return WIN;
    }
}