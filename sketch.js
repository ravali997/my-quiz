var canvas, backgroundImage;

var gameState = 0;
var contestantname= null;

var question,QA=0;
var options = [];
var quiz;

var crtAns = [];

var op1,op2,op3 ;

var arr ;
var i;

function setup(){
  canvas = createCanvas(850,400);
  question = new Question();
 question.start()
 quiz = new Quiz();
 
 
 arr = [1, 2, 3];
shuffleArray(arr);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
console.log(arr);
}

function draw(){
  background("pink");
 // console.log(options)

  if(gameState === 1){
    quiz.result()
  }

  
}
