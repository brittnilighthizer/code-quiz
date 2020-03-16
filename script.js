$(document).ready(function () {
    $("#initials").hide();

    console.log("ready!");
    var time = 60
    var timer;
    var card = $("#quiz");
    // QUESTIONS
    var questions = [
        {
            question: "What color is the sky?",
            choices: ["Blue", "Red", "Green"],
            correctAnswer: "Blue"
        }, {
            question: "What color are the trees?",
            choices: ["Blue", "Red", "Green"],
            correctAnswer: "Green"
        }, {
            question: "What color is the ocean?",
            choices: ["Blue", "Red", "Green"],
            correctAnswer: "Blue"
        }, {
            question: "What color is my car?",
            choices: ["Black", "Red", "White"],
            correctAnswer: "Black"
        }, {
            question: "What color are cherries?",
            choices: ["Black", "Red", "White"],
            correctAnswer: "Red"
        }, {
            question: "What color are oranges?",
            choices: ["Black", "Red", "Orange"],
            correctAnswer: "Orange"
        }, {
            question: "What color are rainclouds?",
            choices: ["Purple", "White", "Grey"],
            correctAnswer: "Grey"
        }, {
            question: "What color is grass?",
            choices: ["Blue", "Green", "Pink"],
            correctAnswer: "Green"
        }, {
            question: "What color are banans?",
            choices: ["Yellow", "Orange", "Red"],
            correctAnswer: "Yellow"
        }, {
            question: "What color are apples?",
            choices: ["Brown", "Red", "White"],
            correctAnswer: "Red"
        }, {
            question: "What color is a stop sign?",
            choices: ["Yellow", "Red", "White"],
            correctAnswer: "Red"
        }, {
            question: "What shape is a stop sign?",
            choices: ["Square", "Octagon", "Rectangle"],
            correctAnswer: "Octagon"
        }, {
            question: "What shape is a yeild sign?",
            choices: ["Triangle", "Diamond", "Circle"],
            correctAnswer: "Triangle"
        }, {
            question: "What color means 'slow-down'?",
            choices: ["Red", "Yellow", "Green"],
            correctAnswer: "Yellow"
        }
    ];
    var questionIndex = 0;
    var score = 0;
    var qAvail = questions.length;

    function nextQuestion() {
        card.empty();
        card.append("<h2>" + questions[questionIndex].question + "</h2>");
        for (var i = 0; i < questions[questionIndex].choices.length; i++) {
            card.append(`<p><input type='radio' id='radio-buttons' name='question-` + questionIndex +
                "' value='" + questions[questionIndex].choices[i] + "''>" + questions[questionIndex].choices[i]);
        }
        $("#score").text("Current Score: " + score);
    }

    function checkChoice() {
        userClick = $("input:checked").val();
        // console.log(clickedButton);
        console.log(userClick);
        if (userClick === questions[questionIndex].correctAnswer) {
            score++;
        }
        else if (time > 0) {
            score--;
            time -= 10;
        }
        else if (time < 0) {
            finished();
        }

        questionIndex++;

        if (qAvail <= questionIndex) {
            time = 0;
            $("#timer").text("You are out of time!");
            clearInterval(timer);
            card.empty();
            $("#score").text("Final Score: " + score);
            $("#quiz").text("You've completed the quiz!");
        }
        else {
            nextQuestion();
        }
        if (time == 0) {
            finished();
        }
    }
    function finished() {
        time = 0;
        $("#timer").text("You are out of time!");
        clearInterval(timer);
        card.empty();
        $("#score").text("Final Score: " + score);
        $("#quiz").text("You've completed the quiz!");

        $("#initials").show();

        // render the local storage of initials and high scores.

        $(".fiveDay").append(fiveDayForecast);
    }

    window.localStorage.setItem(".fiveday", JSON.stringify(runningHistory))

}

    $(document).on("click", "#start", function () {
    function initQuiz() {
        nextQuestion();
    }
    initQuiz();


    timer = setInterval(function x() {

        time--;
        console.log(time)
        $("#timer").text("Time: " + time + " seconds");

        if (time <= 0) {
            clearInterval(timer);
        }

        return x
    }, 1000)

});

$("#quiz").on("click", "#radio-buttons", function () {
    checkChoice();
    console.log("click works")
});
});



