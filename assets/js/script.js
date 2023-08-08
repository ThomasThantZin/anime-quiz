//declare all variables
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const quizQuestion = document.getElementById("quizQuestion");
const quizImg = document.getElementById("quizImg");
const optionA = document.getElementById("choiceA");
const optionB = document.getElementById("choiceB");
const optionC = document.getElementById("choiceC");
const optionD = document.getElementById("choiceD");
const scoreBlock = document.getElementById("scoreBlock");
const scoreMessage = document.getElementById("scoreMessage");
const quizAgain = document.getElementById("quizAgain");
const choices = document.getElementById("choices");
const choiceResponse = document.getElementById("choiceResponse");
let score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Which anime is she from?",
    imgSrc: "assets/images/azusa_nakano.png",
    choiceA: "Naruto",
    choiceB: "K-ON!",
    choiceC: "Bocchi The Rock",
    choiceD: "Love Live!",
    correctAnswer: "B"
}, {
    question: "which anime is she from?",
    imgSrc: "assets/images/kaori_miyazono.png",
    choiceA: "Violet Evergarden",
    choiceB: "I want to eat your pancreas",
    choiceC: "Your Lie in April",
    choiceD: "5 Centimeters per Second",
    correctAnswer: "C"
}, {
    question: "Which 'Golden Time' anime charater is this?",
    imgSrc: "assets/images/kouko_kaga.png",
    choiceA: "Kouko Kaga",
    choiceB: "Chinami Oka",
    choiceC: "Banri Tada",
    choiceD: "Nana Hayashida",
    correctAnswer: "A"
}, {
    question: "Which anime series is she from?",
    imgSrc: "assets/images/megumi_tadokoro.png",
    choiceA: "Food Wars!: Shokugeki no Soma",
    choiceB: "Isekai Restaurant",
    choiceC: "Ben-To",
    choiceD: "Yakitate!! Japan",
    correctAnswer: "A"
}, {
    question: "Which anime series is she from?",
    imgSrc: "assets/images/mikasa_ackerman.png",
    choiceA: "Ajin: Demi-Human",
    choiceB: "Heavenly Delusion",
    choiceC: "Fullmetal Alchemist",
    choiceD: "Attack On Titan",
    correctAnswer: "D"
}, {
    question: "Which anime series is she from?",
    imgSrc: "assets/images/miyuki_shiba.png",
    choiceA: "The Irregular at Magic High School",
    choiceB: "The Asterisk War",
    choiceC: "High School DxD",
    choiceD: "High School of the Dead",
    correctAnswer: "A"
}, {
    question: "Which anime series is she from?",
    imgSrc: "assets/images/sahoto_ashisu.png",
    choiceA: "The Pet Girl Of Sakurasou",
    choiceB: "Eromanga Sensei",
    choiceC: "Keep Your Hands Off Eizouken",
    choiceD: "Mangaka-san to Assistant",
    correctAnswer: "D"
}, {
    question: "Which 'Haikyu!' anime charater is this?",
    imgSrc: "assets/images/tooru_oikawa.png",
    choiceA: "Shoyo Hinata",
    choiceB: "Kenma Kozume",
    choiceC: "Tooru Oikawa",
    choiceD: "Wakatoshi Ushijima",
    correctAnswer: "C"
}, {
    question: "Which anime is she from?",
    imgSrc: "assets/images/uka-no-mitama-no-kami.png",
    choiceA: "Kamisama Kiss",
    choiceB: "Hotarubi no Mori e",
    choiceC: "Inari, Konkon, Koi Iroha",
    choiceD: "Noragami",
    correctAnswer: "C"
}, {
    question: "Which anime is she from?",
    imgSrc: "assets/images/yukino_yukinoshita.png",
    choiceA: "My Teen Romantic Comedy SNAFU",
    choiceB: "KoKoro Connect",
    choiceC: "Seitokai Yakuindomo",
    choiceD: "Classroom of the Elite",
    correctAnswer: "A"
},];


let questionIndex = 0;

// start quiz
function beginQuiz() {
    start.style.display = "none";
    const totalQuestions = 5;
    const randomQuestions = getRandomQuestions(totalQuestions);
    questions = randomQuestions;
    questionIndex = 0;
    getQuestion();
    quiz.style.display = "block";
}

// getQuestion function
function getQuestion() {
    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " + (questionIndex + 1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}
// Function to get 5 random questions
function getRandomQuestions(totalQuestions) {
    const randomQuestions = [];
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    for (let i = 0; i < totalQuestions; i++) {
        randomQuestions.push(shuffledQuestions[i]);
    }
    return randomQuestions;
}

// function to check if answer is correct or wrong!
function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML = "<p>Correct!</p>";
            choiceResponse.style.display = "block";
            alert("Correct! You earned a point!");
            setTimeout(getQuestion, 2000);
        } else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML = "<p>Incorrect!</p>";
            choiceResponse.style.display = "block";
            alert("Beep! Wrong!");
            setTimeout(getQuestion, 2000);
        }
    } else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML = "<p>Correct!</p>";
            choiceResponse.style.display = "block";
            alert("Correct! You earned a point!");
            setTimeout(showScore, 2000);
        } else {
            choices.style.display = "none";
            choiceResponse.innerHTML = "<p>Incorrect!</p>";
            choiceResponse.style.display = "block";
            alert("Beep! Wrong!");
            setTimeout(showScore, 2000);
        }
    }
}

// show score function
function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 5!</p>";
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}

// To restart Quiz game 

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}

document.querySelector(".start-btn").addEventListener("click", beginQuiz);






