const category = document.querySelectorAll(".category");

let currentQuestion = 0;

let questionsHTML = [
  {
    question: "Who has invented HTML?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Which character is used to indicate an end tag?",
    answer_1: "/",
    answer_2: "*",
    answer_3: "^",
    answer_4: "<",
    right_answer: 1,
  },
  {
    question: "Which of these elements are all <table> elements?",
    answer_1: "<table><tr><td>",
    answer_2: "<thead><body><tr>",
    answer_3: "<table><head><tfoot>",
    answer_4: "<table><tr><tt>",
    right_answer: 1,
  },
  {
    question: "How can you make a numbered list?",
    answer_1: "<ul>",
    answer_2: "<ol>",
    answer_3: "<list>",
    answer_4: "<dl>",
    right_answer: 2,
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
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answer_1: "style",
    answer_2: "class",
    answer_3: "font",
    answer_4: "styles",
    right_answer: 1,
  },
  {
    question: "Which is the correct CSS syntax",
    answer_1: "{body;color:black}",
    answer_2: "body:color=black;",
    answer_3: "body {color: black;}",
    answer_4: "{body:color=black;}",
    right_answer: 3,
  },
  {
    question: "How do you insert a comment in a CSS file",
    answer_1: "/* this is a comment */",
    answer_2: "' this is a comment",
    answer_3: "// this is a comment",
    answer_4: "// this is a comment //",
    right_answer: 1,
  },
];

let questionsJS = [
  {
    question: "Inside which HTML element do we put the JavaScript",
    answer_1: "<scripting>",
    answer_2: "<javascript>",
    answer_3: "<js>",
    answer_4: "<script>",
    right_answer: 4,
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?<br><br><p id='demo'>This is a demonstration.</p>",
    answer_1: "document.getElementById('demo').innerHTML = 'Hello World!';",
    answer_2: "document.getElementById('p').innerHTML = 'Hello World!';",
    answer_3: "#demo.innerHTML = 'Hello World!';",
    answer_4: "document.getElement('p').innerHTML = 'Hello World!';",
    right_answer: 1,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answer_1: "msgBox('Hello World!');",
    answer_2: "alertBox('Hello World!');",
    answer_3: "msg('Hello World!');",
    answer_4: "alert('Hello World!');",
    right_answer: 4,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answer_1: "if i = 5 then",
    answer_2: "if i = 5",
    answer_3: "if i == 5 then",
    answer_4: "if (i == 5)",
    right_answer: 4,
  },
];

let questionsJava = [
  {
    question: "What is a correct syntax to output 'Hello World' in Java?",
    answer_1: "echo('Hello World');",
    answer_2: "Console.WriteLine('Hello World');",
    answer_3: "print('Hello World');",
    answer_4: "System.out.printIn('Hello World');",
    right_answer: 4,
  },
  {
    question:
      "Which data type is used to create a variable that should store text?",
    answer_1: "String",
    answer_2: "Txt",
    answer_3: "string",
    answer_4: "myString",
    right_answer: 2,
  },
  {
    question: "How do you create a variable with the floating number 2.8?",
    answer_1: "int x = 2.8f;",
    answer_2: "x = 2.8f;",
    answer_3: "float x = 2.8f;",
    answer_4: "byte x = 2.8f",
    right_answer: 3,
  },
  {
    question: "Which method can be used to find the length of a string?",
    answer_1: "getLength()",
    answer_2: "getSize()",
    answer_3: "len()",
    answer_4: "legnth()",
    right_answer: 4,
  },
];

function chooseCategory(category) {
  let choosenCategory = category.textContent;
  document.getElementById("startButton").addEventListener("click", () => quizBody(choosenCategory));
  document.getElementById("quizTitle").innerHTML = "";
  document.getElementById("quizTitle").innerHTML = `<h5 class="card-title" style="font-size: x-large;" id="quizTitle">Welcome to <br>The Awesome ${choosenCategory} Quiz</h5>`;
}

function quizBody(category) {
  document.getElementById("quizContainer").innerHTML = "";
  document.getElementById("quizContainer").innerHTML = `
  <div class="card-body quizQuestions">
  <h5 class="card-title" id="questionText">Frage</h5>

  <div class="card mb-2">
    <div class="card-body quizAnswer" onclick="answer('answer_1')" id="answer_1">Antwort</div>
  </div>

  <div class="card mb-2">
    <div class="card-body quizAnswer" onclick="answer('answer_2')" id="answer_2">Antwort</div>
  </div>

  <div class="card mb-2">
    <div class="card-body quizAnswer" onclick="answer('answer_3')" id="answer_3">Antwort</div>
  </div>

  <div class="card mb-2">
    <div class="card-body quizAnswer" onclick="answer('answer_4')" id="answer_4">Antwort</div>
  </div>
  `;
  showQuestion(category);
}

const questionNumber = 0;

function showQuestion(category) {
    let categoryQuestion = eval("questions" + category + []);
    let quiz = categoryQuestion[questionNumber];
    document.getElementById("questionText").innerHTML = quiz["question"];
    document.getElementById("answer_1").innerHTML = quiz["answer_1"];
    document.getElementById("answer_2").innerHTML = quiz["answer_2"];
    document.getElementById("answer_3").innerHTML = quiz["answer_3"];
    document.getElementById("answer_4").innerHTML = quiz["answer_4"];
};

category.forEach((category) =>
  category.addEventListener("click", () => chooseCategory(category))
); /* callBackFunction */
