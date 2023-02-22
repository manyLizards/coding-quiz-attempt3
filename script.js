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
var incorrect = document.querySelector('.incorrect');

//when I click the start button, the timer starts and I am presented with a question
startBtn.addEventListener("click", function() {
    welcomePage.style.display = "none";
    questionOne.style.display = "block";
    setTimeout(endGame, 90000);
})

function endGame () {
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    questionFour.style.display = "none";
    welcomePage.style.display = "none";
    gameOver.style.display = "block";
}

incorrect.addEventListener("click", function() {
    //subtract time from timer
})

firstCorrect.addEventListener("click", function () {
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
})

secondCorrect.addEventListener("click", function () {
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
})

thirdCorrect.addEventListener("click", function () {
    questionThree.style.display = "none";
    questionFour.style.display = "block";
})

fourthCorrect.addEventListener("click", function () {
    questionFour.style.display = "none";
    gameOver.style.display = "block";
})