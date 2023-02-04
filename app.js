document
  .getElementById("startButton")
  .addEventListener("click", () => quizBody("HTML"));

const category = document.querySelectorAll(".category");

let quiz = [];
let quizCategory = ["HTML", "CSS", "JS", "Java"];
let questionNumber = 0;
let points = 0;
let progressNumber = 0;
let arrayLength = 0;

let questionsHTML = [
  {
    question: "Who has invented HTML?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
    given_answer: "",
  },
  {
    question: "Which character is used to indicate an end tag?",
    answer_1: "/",
    answer_2: "*",
    answer_3: "^",
    answer_4: "<",
    right_answer: 1,
    given_answer: "",
  },
  {
    question: "Which of these elements are all &lt;table&gt; elements?",
    answer_1: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
    answer_2: "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;",
    answer_3: "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;",
    answer_4: "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;",
    right_answer: 1,
    given_answer: "",
  },
  {
    question: "How can you make a numbered list?",
    answer_1: "&lt;ul&gt;",
    answer_2: "&lt;ol&gt;",
    answer_3: "&lt;list&gt;",
    answer_4: "&lt;dl&gt;",
    right_answer: 2,
    given_answer: "",
  },
];

let questionsCSS = [
  {
    question: "What does CSS stand for?",
    answer_1: "Creative Style Sheets",
    answer_2: "Colorful Style Sheets",
    answer_3: "Computer Style Sheets",
    answer_4: "Cascading Style Sheets",
    right_answer: 4,
    given_answer: "",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answer_1: "style",
    answer_2: "class",
    answer_3: "font",
    answer_4: "styles",
    right_answer: 1,
    given_answer: "",
  },
  {
    question: "Which is the correct CSS syntax",
    answer_1: "{body;color:black}",
    answer_2: "body:color=black;",
    answer_3: "body {color: black;}",
    answer_4: "{body:color=black;}",
    right_answer: 3,
    given_answer: "",
  },
  {
    question: "How do you insert a comment in a CSS file",
    answer_1: "/* this is a comment */",
    answer_2: "' this is a comment",
    answer_3: "// this is a comment",
    answer_4: "// this is a comment //",
    right_answer: 1,
    given_answer: "",
  },
];

let questionsJS = [
  {
    question: "Inside which HTML element do we put the JavaScript",
    answer_1: "&lt;scripting&gt;",
    answer_2: "&lt;javascript&gt;",
    answer_3: "&lt;js&gt;",
    answer_4: "&lt;script&gt;",
    right_answer: 4,
    given_answer: "",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?<br><br>&lt;p id=&ldquo;demo&rdquo;&gt;This is a demonstration.&lt;/p&gt;",
    answer_1:
      "document.getElementById(&ldquo;demo&rdquo;).innerHTML = &ldquo;Hello World!&rdquo;;",
    answer_2:
      "document.getElementById(&ldquo;p&rdquo;).innerHTML = &ldquo;Hello World!&rdquo;;",
    answer_3: "#demo.innerHTML = &ldquo;Hello World!&rdquo;;",
    answer_4:
      "document.getElement(&ldquo;p&rdquo;).innerHTML = &ldquo;Hello World!&rdquo;;",
    right_answer: 1,
    given_answer: "",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answer_1: "msgBox(&ldquo;Hello World!&rdquo;);",
    answer_2: "alertBox(&ldquo;Hello World!&rdquo;);",
    answer_3: "msg(&ldquo;Hello World!&rdquo;);",
    answer_4: "alert(&ldquo;Hello World!&rdquo;);",
    right_answer: 4,
    given_answer: "",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answer_1: "if i = 5 then",
    answer_2: "if i = 5",
    answer_3: "if i == 5 then",
    answer_4: "if (i == 5)",
    right_answer: 4,
    given_answer: "",
  },
];

let questionsJava = [
  {
    question:
      "What is a correct syntax to output &ldquo;Hello World&rdquo; in Java?",
    answer_1: "echo(&ldquo;Hello World&rdquo;);",
    answer_2: "Console.WriteLine(&ldquo;Hello World&rdquo;);",
    answer_3: "print(&ldquo;Hello World&rdquo;);",
    answer_4: "System.out.printIn(&ldquo;Hello World&rdquo;);",
    right_answer: 4,
    given_answer: "",
  },
  {
    question:
      "Which data type is used to create a variable that should store text?",
    answer_1: "String",
    answer_2: "Txt",
    answer_3: "string",
    answer_4: "myString",
    right_answer: 2,
    given_answer: "",
  },
  {
    question: "How do you create a variable with the floating number 2.8?",
    answer_1: "int x = 2.8f;",
    answer_2: "x = 2.8f;",
    answer_3: "float x = 2.8f;",
    answer_4: "byte x = 2.8f",
    right_answer: 3,
    given_answer: "",
  },
  {
    question: "Which method can be used to find the length of a string?",
    answer_1: "getLength()",
    answer_2: "getSize()",
    answer_3: "len()",
    answer_4: "legnth()",
    right_answer: 4,
    given_answer: "",
  },
];

function chooseCategory(category) {
  let choosenCategory = category.textContent;
  resetEverything();
  document.getElementById("quizContainer").innerHTML = "";
  document.getElementById("quizContainer").innerHTML = `
  <h5 class="card-title" style="font-size: x-large;" id="quizTitle">Welcome to <br>The Awesome HTML Quiz</h5>
  <p class="card-text">
    Ready for the Challenge?
  </p>
  <button class="startButton" id="startButton">
    START NOW <img src="img/rightArrow.png"/>
  </button>
  `;
  document
    .getElementById("startButton")
    .addEventListener("click", () => quizBody(choosenCategory));
  document.getElementById("quizTitle").innerHTML = "";
  document.getElementById(
    "quizTitle"
  ).innerHTML = `<h5 class="card-title" style="font-size: x-large;" id="quizTitle">Welcome to <br>The Awesome ${choosenCategory} Quiz</h5>`;
}

function quizBody(category) {
  document.getElementById("quizContainer").innerHTML = "";
  document.getElementById("quizContainer").innerHTML = `
  <div class="card-body quizQuestions">
  <h5 class="card-title" id="questionText">Frage</h5>

  <div class="card mb-2 answerCard">
  <div class="answerSelector">A</div><div class="card-body quizAnswer" onclick="answer('answer_1')" id="answer_1">Antwort</div>
  </div>

  <div class="card mb-2 answerCard">
  <div class="answerSelector">B</div><div class="card-body quizAnswer" onclick="answer('answer_2')" id="answer_2">Antwort</div>
  </div>

  <div class="card mb-2 answerCard">
  <div class="answerSelector">C</div><div class="card-body quizAnswer" onclick="answer('answer_3')" id="answer_3">Antwort</div>
  </div>

  <div class="card mb-2 answerCard">
  <div class="answerSelector">D</div><div class="card-body quizAnswer" onclick="answer('answer_4')" id="answer_4">Antwort</div>
  </div>

  <div class="nextBefore"><button class="back-button" id="back-button" disabled onclick="lastQuestion('${category}')"></button><button class="next-button" id="next-button" disabled onclick="nextQuestion('${category}')"></button></div>
  `;
  showQuestion(category);
}

function showQuestion(category) {
  arrayLength = eval("questions" + category + []).length;
  quiz = eval("questions" + category + [])[questionNumber];
  document.getElementById("questionText").innerHTML = quiz["question"];
  document.getElementById("answer_1").innerHTML = quiz["answer_1"];
  document.getElementById("answer_2").innerHTML = quiz["answer_2"];
  document.getElementById("answer_3").innerHTML = quiz["answer_3"];
  document.getElementById("answer_4").innerHTML = quiz["answer_4"];
}

function answer(selection) {
  let selectedNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${quiz["right_answer"]}`;
  if (selectedNumber == quiz["right_answer"] && quiz["given_answer"] == "") {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    quiz["given_answer"] = selectedNumber;
    points++;
    progress();
  } else if (quiz["given_answer"] == "") {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    quiz["given_answer"] = selectedNumber;
    progress();
  }
}

function progress() {
  progressNumber++;
  let percent = progressNumber / arrayLength;
  percent = Math.round(percent * 100);
  document.getElementById("percent").style = `width: ${percent}%;`;
  document.getElementById("next-button").disabled = false;
}

function lastQuestion(category) {
  questionNumber = questionNumber - 1;
  resetAnswers();
  showQuestion(category);
  let idOfRightAnswer = `answer_${quiz["right_answer"]}`;
  let idOfGivenAnswer = `answer_${quiz["given_answer"]}`;
  if (idOfGivenAnswer === idOfRightAnswer) {
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  } else {
    document
      .getElementById(idOfGivenAnswer)
      .parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
  if (questionNumber === 0) {
    document.getElementById("back-button").disabled = true;
  }
}

function nextQuestion(category) {
  questionNumber++;
  if (questionNumber === arrayLength) {
    endscreen(category);
  } else {
    quiz = eval("questions" + category + [])[questionNumber];
    let idOfRightAnswer = `answer_${quiz["right_answer"]}`;
    let idOfGivenAnswer = `answer_${quiz["given_answer"]}`;
    if (quiz["given_answer"] === "") {
      showQuestion(category);
      resetAnswers();
      document.getElementById("next-button").disabled = true;
      document.getElementById("back-button").disabled = false;
    } else {
      showQuestion(category);
      resetAnswers();
      if (idOfGivenAnswer === idOfRightAnswer) {
        document
          .getElementById(idOfRightAnswer)
          .parentNode.classList.add("bg-success");
      } else {
        document
          .getElementById(idOfGivenAnswer)
          .parentNode.classList.add("bg-danger");
        document
          .getElementById(idOfRightAnswer)
          .parentNode.classList.add("bg-success");
      }
    }
  }
}

function resetAnswers() {
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-success");
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-danger");
  }
}

function resetEverything() {
  questionNumber = 0;
  points = 0;
  progressNumber = 0;
  arrayLength = 0;
  document.getElementById("percent").style = `width: 0%;`;
  for (let i = 0; i < quizCategory.length; i++) {
    let toClearCategory = eval("questions" + quizCategory[i] + []);
    for (let k = 0; k < toClearCategory.length; k++) {
      toClearCategory[k]["given_answer"] = "";
    }
  }
}

function endscreen(category) {
  document.getElementById("quizContainer").innerHTML = "";
  document.getElementById("quizContainer").innerHTML = `
  <img class="brain" src="img/brain result.png">
  <p class="card-text">YOUR SCORE ${points}/4</p>
  <button class="replayButton" id="replayButton">REPLAY</button>
  `;
  document
    .getElementById("replayButton")
    .addEventListener("click", () => quizBody(category));
  resetEverything();
}

category.forEach((category) =>
  category.addEventListener("click", () => chooseCategory(category))
); /* callBackFunction */
