var readlineSync=require('readline-sync');
var userName=readlineSync.question("May I know your name ?");
console.log("Hi "+ userName + " Welcome to Friends-quiz !");
console.log("Level-0");
var score=0;

var questionsLevelZero=[
  {
    ques: `How many seasons of Friends are there ?
    A: 3
    B: 4
    C: 8
    D: 10\nYour answer: `,
    ans: "D"
  },
  {
    ques: `How many times did Ross get divorced?
    A: 2
    B: 3
    C: 1
    D: 4\nYour answer: `,
    ans: "B"
  },
  {
      ques: `Which Stephen King book did Joey hide in his freezer?

      A: Pet Sematary
      B: The Shining
      C: Carrie
      D: It\nYour answer: `,
      ans: "B"
  },
  {
      ques: `How many sisters does Joey have?
      A: 7
      B: 5
      C: 2
      D: None\nYour answer: `,
      ans: "A"
  },
  {
    ques: `What is the name of Joey’s character in the commercial for opening milk cartons?
  
    A: Mike
    B: Tommy
    C: Kevin
    D: Drake\nYour answer: `,
      ans: "C"
  }
]

var questionsLevelOne=[
  {
    ques: `Which famous actor’s butt does Joey play in a shower scene?

    A: Bruce Willis
    B: Al Pacino
    C: Charlton Heston
    D: Jeff Goldblum\nYour answer: `,
    ans: "B"
  },
  {
    ques: `What is Ross’ profession?

    A: Geologist
    B: Astronomer
    C: Palaeontologist
    D: Museum tour guide\nYour answer: `,
    ans: "C"
  },
  {
      ques: `Where does Ross spend the night with Emily after they first meet?

    A: A hotel in Poughkeepsie
    B: A bed and breakfast in Vermont
    C: A bungalow in Tulsa
    D: A park in Atlantic City\nYour answer: `,
      ans: "B"
  },
  {
      ques: `What instrument did Ross intend to play at Monica and Chandler’s wedding?

      A: Keyboard
      B: Drunks
      C: Saxophone
      D: Bagpipes\nYour answer: `,
      ans: "D"
  },
  {
    ques: `What song does Ross’ monkey, Marcel, keep playing?

    A: The Lion Sleeps Tonight‘ by The Tokens
    B: Tiny Dancer’ by Elton John
    C: The Way You Looked Tonight’ by Tony Bennett
    D: Careless Whisper’ by George Michael\nYour answer: `,
      ans: "A"
  }
]
var highest=["Muskan"];
var secondHighest=["Renu"];
var thirdHighest=["Yash"]
var scoresList=[
  {
    marks: 10,
    name: highest
  },
  {
    marks:9,
    name: secondHighest
  },
  {
    marks:8,
    name: thirdHighest
  }
]


function play(ques, ans)
{
  var userAnswer = readlineSync.question(ques);
  if(userAnswer.toLowerCase()===ans.toLowerCase())
  {
    console.log("You're Right !");
    score++;
    console.log("Your current score is "+score);
  }
  else
  {
    console.log("You're Wrong!");
    if(readlineSync.keyInYN("do you want to try again ?")){
      play(ques, ans);
    }
  }
}
var totalQuestionsLevelZero = questionsLevelZero.length;
for(var i=0;i<totalQuestionsLevelZero;i++)
{
  var currQuestion = questionsLevelZero[i];
  play(currQuestion.ques, currQuestion.ans);
}
console.log("Your total score is: "+score);

if(score<questionsLevelZero.length)
{
  console.log("You are not qualified for Level-1");
  if(readlineSync.keyInYN("do you want to play level-0 again ?"))
  {
    score=0;
      for(var i=0;i<totalQuestionsLevelZero;i++)
      {
        var currQuestion = questionsLevelZero[i];
        play(currQuestion.ques, currQuestion.ans);
      }
    
    } 
  else
  {
    console.log("Highest score winners are:", scoresList[0].name );
        console.log("Second Highest score winners are:", scoresList[1].name );
        console.log(" Third Highest score winners are:", scoresList[2].name );
        console.log("If your total score is between 8 and 10 Please send us the screenshot of your achievement!");
    console.log("Thanks for playing with us !")
  }
}
else if(score===questionsLevelZero.length)
{
  console.log("Welcome to level-1");
  if(readlineSync.keyInYN("do you want to continue ?"))
  {
      var totalQuestionsLevelOne = questionsLevelOne.length;
      for(var i=0;i<totalQuestionsLevelOne;i++){
        var currQuestion = questionsLevelOne[i];
        play(currQuestion.ques, currQuestion.ans);
      }
      console.log("Your total score is: "+score);
      if(score===questionsLevelOne.length + questionsLevelZero.length)
      {
        console.log("Hurray!! You are the winner :)");
        console.log("Highest score winners are:", scoresList[0].name );
        console.log("Second Highest score winners are:", scoresList[1].name );
        console.log(" Third Highest score winners are:", scoresList[2].name );
        console.log("If your total score is between 8 and 10 Please send us the screenshot of your achievement!");
      }
      else
      {
        console.log("Your highest score is "+score);
        if(readlineSync.keyInYN("do you want to play level-1 again ?"))
        {
          score=questionsLevelZero.length;
          for(var i=0;i<totalQuestionsLevelOne;i++)
          {
            var currQuestion = questionsLevelOne[i];
            play(currQuestion.ques, currQuestion.ans);
          }
        }
        else
        {
          console.log("Highest score winners are:", scoresList[0].name );
        console.log("Second Highest score winners are:", scoresList[1].name );
        console.log(" Third Highest score winners are:", scoresList[2].name );
        console.log("If your total score is between 8 and 10 Please send us the screenshot of your achievement!");
          console.log("Thanks for playing with us !")
        }
      }
  }
  else
  {
    console.log("Thanks for playing with us ! Have a great day :)");
  }
}