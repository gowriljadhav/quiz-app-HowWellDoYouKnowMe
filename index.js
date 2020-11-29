const readlineSync=require('readline-sync');

var score=0;
var userName=readlineSync.question("Hey! What is your name?\n");
console.log("Welcome "+userName+" to how well you know Gowri");

function play(question,answer){
  var  userAnswer= readlineSync.question(question);
  if(userAnswer==answer)
  {
    console.log("Correct answer!");
    score=score+1;

  }
  else
    console.log("WRONG :(");

  console.log("Your score is : "+score)
}



var questions=[
{
  question: "Where do I live?",
  answer: "Bangalore"
},
{
    question: "Which is my favorite band?",
  answer: "Tame Impala"
},
{
  question:"Which sweet do I like?",
  answer:"kaju katli"
}

];

for(var i=0;i<questions.length;i++)
{
  var currentQues=questions[i];
  play(currentQues.question,currentQues.answer)
}

console.log(userName+", your TOTAL SCORE is: "+score);