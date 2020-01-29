# psuedo code-quiz 
------

# Find questions for Quiz [make sure it is more than what the user can complete]
const questions = [{
    question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    },
    {question: "What does HTML stand for?",
    choiceA: "placeholderA",
    choiceB: "placeholderB",
    choiceC: "placeholderC",
    correct: "A"
    }
}]

<div id="choices">
<div class="choice" id="A" onclick="checkAnswer('A')">A</div>
<div class="choice" id="B" onclick="checkAnswer('B')">B</div>
<div class="choice" id="C" onclick="checkAnswer('C')">C</div>
</div>

WHEN I click the start button
# need a button that links/activates a timer / countdown
# maybe use this:
<div id="start"> Start Quiz! </div>
<div id="quiz" style="display: none;">

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    timer
    score
}

THEN a timer starts and I am presented with a question
<div id="timer">
<div id="counter"> </div>

    maybe use this:
var countdown = function(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
};

    var num = 15;
    countdown(num);
    expect(console.log.calledWith()).to.eql([
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
    ]);

WHEN I answer a question
# prompt / select (how do i do multiple choice?)
got that. 

THEN I am presented with another question
# activates next question

WHEN I answer a question incorrectly
# if else statements to determine correct answer, else being incorrect
function checkAnswer(answer){
    if(questions[runningQuestionsIndex].correct ==     ){
        score++;
        moreTimeInt(timer);
    }
    else {
        score--;
        lessTimeInt(timer);
    }



THEN time is subtracted from the clock
# if else (incorrect); -5 seconds from timer

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score
# prompt initials
# use prompt value (userInitials) + score and present 

