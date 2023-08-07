//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

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


