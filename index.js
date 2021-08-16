// markTwo
var readLineSync = require("readline-sync");
var chalk = require('chalk');
var userName = readLineSync.question(chalk.keyword('orange')("What's your name?: "));
var score = 0;

console.log("Welcome, "+chalk.keyword('blue')(userName)+". Here's a quiz for you about Independence Day of India. Choose the right option to score well.");

var questions = [
  {
    question: "1. What is the theme of India's 75th Independence Day? \n \
    a) Nation First, Always First \n \
    b) Atmanirbhar Bharat \n \
    c) Healthcare first \n \
    d) India always first \n",
    answer: "a"
  },
  {
    question: "2. The Indian Army has installed a 100-ft tall Indian National Flag in? \n \
    a) J&K \n \
    b) Delhi \n \
    c) Ladakh \n \
    d) Uttarakhand \n",
    answer: "a"
  },
  {
    question: "3. Who was the last Viceroy of India? \n \
    a) Lord Irwin \n \
    b) Lord Mountbatten \n \
    c) Lord Curzon \n \
    d) Lord Lansdowne \n",
    answer: "b"
  },
  {
    question: "4. Who wrote India's national song Vande Mataram? \n \
    a) Rabindranath Tagore \n \
    b) Sri Aurobindo Ghosh \n \
    c) Sarojini Naidu \n \
    d) Bankim Chandra Chatterjee \n",
    answer: "d"
  },
  {
    question: "5. The resolution demanding Poorna Swaraj was passed during which Indian National Congress session? \n \
    a) 1929 Lahore Session \n \
    b) 1928 Calcutta Session \n \
    c) 1927 Madras Session \n \
    d) 1931 Karachi Session \n",
    answer: "a"
  },
  {
    question: "6. Which year did civil disobedience movement begin? \n \
    a) 1926 \n \
    b) 1930 \n \
    c) 1940 \n \
    d) 1941 \n",
    answer: "b"
  },
  {
    question: "7. Who designed India's national flag? \n \
    a) Pingali Venkayya \n \
    b) Sri Aurobindo Ghosh \n \
    c) Bankim Chandra Chatterjee \n \
    d) Dr. BR Ambedkar \n",
    answer: "a"
  },
  {
    question: "8. Who started the Home Rule league movement? \n \
    a) Annie Besant \n \
    b) Sarojini Naidu \n \
    c) Motilal Nehru \n \
    d) Mahatma Gandhi \n",
    answer: "a"
  },
  {
    question: "9. Who delivered the first Indian Independence day speech? \n \
    a) Motilal Nehru \n \
    b) Mahatma Gandhi \n \
    c) DR. Ambedkar \n \
    d) Jawaharlal Nehru \n",
    answer: "d"
  },
  {
    question: "10. Who had coined the popular slogan Inquilab Zindabad? \n \
    a) Bal Gangadhar Tilak \n \
    b) Bhagat Singh \n \
    c) Subhas Chandra Bose \n \
    d) Chandra Shekhar Azad \n",
    answer: "b"
  },
];

var highscores = [
  {
    name: "Chaitanya",
    hscore: 9
  },
  {
    name: "Akash",
    hscore: 8
  },
  {
    name: "Adithya",
    hscore: 7
  }
];

var min_hs=10;
var max_hs=0;
for(var n=0;n<highscores.length;n++){
    min_hs=Math.min(min_hs,highscores[n].hscore);
    max_hs=Math.max(max_hs,highscores[n].hscore);
}

function qNa(ques_obj_param){
  var result = ques_obj_param.answer;
  return result;
}

console.log(chalk.keyword('green')("Level 1"));
for(var i=0;i<questions.length;i++){

  var userAnswer = readLineSync.question(chalk.keyword('yellow')(questions[i].question))
  if (userAnswer == qNa(questions[i])){
    score = score + 1;
    var ans = "Yes, "+userName+". You're right. So your current score is "+score;
  } else{
    // score = score - 1;
    var ans = "No, "+userName+". It's option "+qNa(questions[i])+". So your current score is "+score;
  }
  
  console.log(chalk.keyword('grey')(ans));

  if(score>=3 && i==4){
    console.log(chalk.keyword('green')("Congrats,"+userName+". You made it to Level 2"));
  } else if (score<3 && i>4){
    console.log(chalk.keyword('red')("Sorry,"+userName+". You cannot proceed to level 2"));
    break;
  } else if (score>=5 && i==6){
    console.log(chalk.keyword('green')("Congrats,"+userName+". You made it to Level 3"));
  } else if (score<5 && i>6){
    console.log(chalk.keyword('red')("Sorry,"+userName+". You cannot proceed to level 3"));
    break;
  }
  
  if(score>max_hs){
    console.log(chalk.keyword('green')("Woah,"+userName+". You broke the record of all other highscores. Send us a screenshot after finishing the quiz so that we can update your data here."));
  }

}

if(score >= min_hs){
  console.log(chalk.keyword('green')("Wow, "+userName+". You reached the high score.  Send us a screenshot after finishing the quiz so that we can update your data here."));

  var newhighscore = {
    name: userName,
    hscore: score
  }

  highscores.push(newhighscore);
}

console.log(chalk.keyword('violet')("The current highscorers are: "));
for(var n=0;n<highscores.length;n++){
    console.log(highscores[n].name+": "+highscores[n].hscore);
}
