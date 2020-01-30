const questions = [
    ["What color is the sky?", "Blue", "Red", "Green", A],
    ["What color are the trees?", "Blue", "Red", "Green", C],
    ["What color is the ocean?", "Blue", "Red", "Green", A],
    ["What color is my car?", "Grey", "Black", "White", B],
];

let score = 0;
let quizIndex = 0;

// function startQuiz() {
//     document.getElementById("question").innerHTML = questions[0].question;
//     index++;
// }

$question = $("<h1>"+questions[quizIndex][0]+"</h1>")
$answer1 = $("<button value = '1' >"+questions[quizIndex][1]+"</button>")
$answer2 = $("<button value = '2' >"+questions[quizIndex][2]+"</button>")
$answer3 = $("<button value = '3' >"+questions[quizIndex][3]+"</button>")


function initQuiz(index) {
    if ()
    
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

