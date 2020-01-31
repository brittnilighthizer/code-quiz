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
    },{
        question: "What color are cherries?",
        choices: ["Black", "Red", "White"],
        correctAnswer: "Red"
    },{
        question: "What color are oranges?",
        choices: ["Black", "Red", "Orange"],
        correctAnswer: "Orange"
    },{
        question: "What color are rainclouds?",
        choices: ["Purple", "White", "Grey"],
        correctAnswer: "Grey"
    },{
        question: "What color is grass?",
        choices: ["Blue", "Green", "Pink"],
        correctAnswer: "Green"
    },{
        question: "What color are banans?",
        choices: ["Yellow", "Orange", "Red"],
        correctAnswer: "Yellow"
    },{
        question: "What color are apples?",
        choices: ["Brown", "Red", "White"],
        correctAnswer: "Red"
    },{
        question: "What color is a stop sign?",
        choices: ["Yellow", "Red", "White"],
        correctAnswer: "Red"
    },{
        question: "What shape is a stop sign?",
        choices: ["Square", "Octagon", "Rectangle"],
        correctAnswer: "Octagon"
    },{
        question: "What shape is a yeild sign?",
        choices: ["Triangle", "Diamond", "Circle"],
        correctAnswer: "Triangle"
    },{
        question: "What color means slow-down on a street-lamp?",
        choices: ["Red", "Yellow", "Green"],
        correctAnswer: "Yellow"
    }
];
var questionIndex = 0;
var score = 0;
var qAvail = questions.length;

function nextQuestion () {
    card.empty();
    card.append("<h2>" + questions[questionIndex].question + "</h2>");
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        card.append("<p><input type='radio' id='radio-buttons' name='question-" + questionIndex +
        "' value='" + questions[questionIndex].choices[i] + "''>" + questions[questionIndex].choices[i]);
    }
    $("#score").text("Current Score: " + score);
}

function checkChoice() {
    userClick = $( "input:checked" ).val();
    // console.log(clickedButton);
    console.log(userClick);
    if (userClick === questions[questionIndex].correctAnswer) {
        score++;
    }
    else {
        score--;
    }
    questionIndex++;
    if (qAvail <= questionIndex) {
        alert("You've answered all questions.")
        clearInterval(timer);
        card.empty();
        $("#score").text("Final Score: " + score);

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
var time = 60 
var timer = setInterval( function () {
    
    time--;
} , 1000)

$("#timer").text("Time: " + time + " seconds");


clearInterval(timer);