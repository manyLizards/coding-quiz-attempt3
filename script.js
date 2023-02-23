var welcomePage = document.querySelector("#welcome-page");
var questionOne = document.querySelector("#question-one");
var questionTwo = document.querySelector("#question-two");
var questionThree = document.querySelector("#question-three");
var questionFour = document.querySelector("#question-four");
var gameOver = document.querySelector("#game-over");
var startBtn = document.querySelector("#start");
var firstCorrect = document.querySelector('.first-correct');
var secondCorrect = document.querySelector('.second-correct');
var thirdCorrect = document.querySelector('.third-correct');
var fourthCorrect = document.querySelector('.fourth-correct');
var incorrect = document.querySelectorAll('.incorrect');
var timer = document.querySelector('#timer');
var count = 75;
var score = 0;
var finalScore = document.querySelector('#score')
var scoreList = document.querySelector("#score-list");
var userName = document.querySelector('#userName');
var submit = document.querySelector('#submit');
var previous = document.querySelector('h3')

startBtn.addEventListener("click", function() {
    welcomePage.style.display = "none";
    questionOne.style.display = "block";
    timer.style.display = "block";
    var interval = setInterval(function() {
        timer.innerHTML=count;
        count--
        if (count === 0) {
            timer.style.display = "none";
            endGame();
        }
    }, 1000)
})

incorrect.forEach(button => {
    button.addEventListener("click", event => {
    count -= 5;
    timer.innerHTML = count;
    score -= 10;
})})

submit.addEventListener('click', function() {
    var input = document.querySelector('#userInput').value;
    localStorage.setItem('userName', input)
    localStorage.setItem('userScore', score);
})

function endGame () {
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    questionFour.style.display = "none";
    welcomePage.style.display = "none";
    gameOver.style.display = "block";
    finalScore.innerHTML = score;
    timer.style.display = "none";
    if (localStorage.getItem('userName') === null) {
        userName.style.display = "none";
        scoreList.style.display = "none";
        previous.style.display = "none";
    } else {
        userName.innerHTML = localStorage.getItem('userName')
        scoreList.innerHTML = localStorage.getItem('userScore');
    }
}

firstCorrect.addEventListener("click", function () {
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    score += 25;
})

secondCorrect.addEventListener("click", function () {
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
    score += 25;
})

thirdCorrect.addEventListener("click", function () {
    questionThree.style.display = "none";
    questionFour.style.display = "block";
    score += 25;
})

fourthCorrect.addEventListener("click", () => {
    score +=25;
    endGame();
})