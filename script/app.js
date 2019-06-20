var userscore = 0;
var computerscore = 0;
const userScore = document.getElementById("user-score");
const comScore = document.getElementById("computer-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const result = document.querySelector(".result");

function choice(){
    rock.addEventListener('click', function(){
        play("r");
    })
    paper.addEventListener('click', function(){
        play("p");
    })
    scissors.addEventListener('click', function(){
        play("s");
    })
}

choice();

function play(Uchoice){
    var Cchoice = computerChoice();
    var res = Uchoice + Cchoice;
    switch(res){
        case "rs":
        case "pr":
        case "sp":
            win(Uchoice, Cchoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(Uchoice, Cchoice);
            break;
        default:
            draw(Uchoice, Cchoice);
    } 
}

function computerChoice(){
    var play = ['r', 'p', 's']
    var cch = Math.floor(Math.random()*3);
    return play[cch];
}

function win(userC, computerC){
    userscore++;
    userScore.innerHTML = userscore;
    comScore.innerHTML = computerscore;
    result.innerHTML = name(userC) + " beat " + name(computerC) + ", You Win!";
}

function lose(userC, computerC){
    computerscore++;
    userScore.innerHTML = userscore;
    comScore.innerHTML = computerscore;
    result.innerHTML = name(userC) + " can't beat " + name(computerC) + ", You Lose!";
}

function draw(userC, computerC){
    userScore.innerHTML = userscore;
    comScore.innerHTML = computerscore;
    result.innerHTML = name(userC) + " equal to " + name(computerC) + ", Draw!";
}

function name(c){
    if(c == "r") return "Rock";
    else if(c == "p") return "Paper";
    else if(c == "s") return "Scissors";
}