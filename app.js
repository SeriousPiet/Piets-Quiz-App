let fields = [];
let currentShape = "cross";
let gameOver = false;

function fillShape(id) {
  if (!fields[id] && !gameOver) {
    if (currentShape == "cross") {
      currentShape = "circle";
      document.getElementById("player-2").classList.remove("playerInactive");
      document.getElementById("player-1").classList.add("playerInactive");
    } else {
      currentShape = "cross";
      document.getElementById("player-1").classList.remove("playerInactive");
      document.getElementById("player-2").classList.add("playerInactive");
    }

    fields[id] = currentShape;
    console.log(fields);

    draw();
    checkForWin();
  }
}

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "circle") {
      document.getElementById("circle-" + i).classList.remove("dNone");
    }

    if (fields[i] == "cross") {
      document.getElementById("cross-" + i).classList.remove("dNone");
    }
  }
}

function checkForWin() {
  let winner;
  let winLine;

  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    /*first-row horizontal*/
    winner = "first-row horizontal " + fields[0];
    winLine = "012";
  }

  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    /*second-row horizontal*/
    winner = "second-row horizontal " + fields[4];
    winLine = "345";
  }

  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    /*third-row horizontal*/
    winner = "third-row horizontal " + fields[7];
    winLine = "678";
  }

  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    /*first-colomn vertikal*/
    winner = "first-colomn vertikal " + fields[0];
    winLine = "036";
  }

  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    /*second-colomn vertikal*/
    winner = "second-colomn vertikal " + fields[1];
    winLine = "147";
  }

  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    /*third-colomn vertikal*/
    winner = "third-colomn vertikal " + fields[2];
    winLine = "258";
  }

  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    /*left to right diagonal*/
    winner = "left to right diagonal " + fields[0];
    winLine = "048";
  }

  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    /*right to left diagonal*/
    winner = "right to left diagonal " + fields[2];
    winLine = "246";
  }
  gotWinner(winLine, winner);
}

function gotWinner(winLine, winner) {
  if (!!winner) {
    console.log("GEWONNEN:", winner);
    if (winLine === "012") {
      document.getElementById("win1").classList.add("horizontalLine");
      document.getElementById("win1").style = "width: 350px;";
    }
    if (winLine === "345") {
      document.getElementById("win4").classList.add("horizontalLine");
      document.getElementById("win4").style = "width: 350px;";
    }
    if (winLine === "678") {
      document.getElementById("win7").classList.add("horizontalLine");
      document.getElementById("win7").style = "width: 350px;";
    }
    if (winLine === "036") {
      document.getElementById("win3").classList.add("vertikalLine");
      document.getElementById("win3").style = "height: 350px;";
    }
    if (winLine === "147") {
      document.getElementById("win4").classList.add("vertikalLine");
      document.getElementById("win4").style = "height: 350px;";
    }
    if (winLine === "258") {
      document.getElementById("win5").classList.add("vertikalLine");
      document.getElementById("win5").style = "height: 350px;";
    }
    if (winLine === "048") {
      document.getElementById("win4").classList.add("diagonalLeftRight");
      document.getElementById("win4").style = "height: 350px;";
    }
    if (winLine === "246") {
      document.getElementById("win4").classList.add("diagonalRightLeft");
      document.getElementById("win4").style = "height: 350px;";
    }
    gameOver = true;
    setTimeout(function () {
      document.getElementById("gameOver").classList.remove("dNone");
      document.getElementById("restartButton").classList.remove("dNone");
    }, 2000);
  }
}

function restart() {
  for (let i = 0; i < fields.length; i++) {
    fields[i] = "";
    document.getElementById("circle-" + i).classList.add("dNone");
    document.getElementById("cross-" + i).classList.add("dNone");
  }
  document.getElementById("gameOver").classList.add("dNone");
  document.getElementById("restartButton").classList.add("dNone");
  if ((currentShape = "circle")) {
    currentShape = "cross";
    document.getElementById("player-1").classList.remove("playerInactive");
    document.getElementById("player-2").classList.add("playerInactive");
  }
  document.getElementById("win1").classList.remove("horizontalLine");
  document.getElementById("win1").style = "width: 0px;";
  document.getElementById("win4").classList.remove("horizontalLine");
  document.getElementById("win4").style = "width: 0px;";
  document.getElementById("win7").classList.remove("horizontalLine");
  document.getElementById("win7").style = "width: 0px;";
  document.getElementById("win3").classList.remove("vertikalLine");
  document.getElementById("win3").style = "height: 0px;";
  document.getElementById("win4").classList.remove("vertikalLine");
  document.getElementById("win4").style = "height: 0px;";
  document.getElementById("win5").classList.remove("vertikalLine");
  document.getElementById("win5").style = "height: 0px;";
  document.getElementById("win4").classList.remove("diagonalLeftRight");
  document.getElementById("win4").style = "height: 0px;";
  document.getElementById("win4").classList.remove("diagonalRightLeft");
  document.getElementById("win4").style = "height: 0px;";
  gameOver = false;
}
