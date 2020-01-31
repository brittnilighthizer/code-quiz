$( document ).ready(function() {
    console.log( "ready!" );

var card = $("#quiz");
// QUESTIONS
var questions = [
    {
        question: "What color is the sky?",
        choices: ["Blue", "Red", "Green"],
        correctAnswer: "Blue"
    },{
        question: "What color are the trees?",
        choices: ["Blue", "Red", "Green"],
        correctAnswer: "Green"
    },{
        question: "What color is the ocean?",
        choices: ["Blue", "Red", "Green"],
        correctAnswer: "Blue"
    },{
        question: "What color is my car?",
        choices: ["Black", "Red", "White"],
        correctAnswer: "Black"
    }
];
var questionIndex = 0;
var score = 0;
var qAvail = questions.length;

function nextQuestion () {
    card.empty();
    card.append("<h2>" + questions[questionIndex].question + "</h2>");
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        card.append("<input type='radio' id='radio-buttons' name='question-" + questionIndex +
        "' value='" + questions[questionIndex].choices[i] + "''>" + questions[questionIndex].choices[i]);
    }
    $("#score").text("Current Score: " + score);
}

function checkChoice() {
    userClick = $( "input:checked" ).val();
    if (userClick === questions[questionIndex].correctAnswer) {
        score++;
    }
    questionIndex++;
    if (qAvail <= questionIndex) {
        clearInterval(timer);
    }
    else {
        nextQuestion();
    }
    
}

$(document).on("click", "#start", function () {
    function initQuiz() {
       nextQuestion();
    }
    initQuiz();

});

$("#quiz").on("click", "#radio-buttons", function (){
    checkChoice();
    console.log("click works")
});
});
var time = 60;
var timer = setInterval( function () {
    time--;
    // update the time on the front end//

} , 1000)

clearInterval(timer);