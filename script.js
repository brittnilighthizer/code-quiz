const questions = [
    {
    question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    // if user select is === correct : score++ (+1)
    // if user select is !== correct : score-- (-1)
    },
    {
    question: "What does CSS stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    // if user select is === correct : score++ (+1)
    // if user select is !== correct : score-- (-1)
    },
        
];
let score = 0;
let index = 0;
function startQuiz() {
    document.getElementById("question").innerHTML = questions[0].question;
    index++;
}

function checkAnswer() {
    const userChoice = this;
    console.log(userChoice);
    if (userChoice === questions[index].correct) {
        alert("Correct! +1 point");
        score++;
        document.getElementById("score").innerHTML = "Current Score: " + score;
    }
    else  {
        alert("Incorrect! -1 point");
        score--;
        document.getElementById("score").innerHTML = "Current Score: " + score;
    }
}

function nextQuestion() {
    document.getElementById("question").innerHTML = questions[index].question;
}



const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
start.addEventListener("click", startQuiz);
document.getElementById("submit-button").addEventListener("click", nextQuestion);
document.getElementById("choice").addEventListener("click", checkAnswer);

// define "statQuiz"


// put me in a div 
// console.log(question[0].choiceA);

// once user selects answer ; notify incorrect or correct (briefly) AND jump to next question

// save score with initials
// promt for initials ; input from user + submit button


// show final score WITH user initials