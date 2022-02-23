function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function setupBoard(boardLength, shipLength) {
  var board = new Array(boardLength).fill("w");
  var shipStart = getRandomInt(0, board.length - shipLength)
  for (i = shipStart; i <= shipStart + 2; i++) {
    board[i] = "s";
    }
    return board;
  }

board = setupBoard(7, 3);
console.log(board);

var sunk = false;
var hits = 0;

while(!sunk) {
  guess = parseInt(prompt("Enter a cell to shoot at (1-7)") - 1);

  if(Number.isInteger(guess) && (guess >= 0) && (guess <= 6))
  {
  if(board[guess] == "s") {
    hits++;
    board[guess] = "w";
    alert("Ouch! That hurt");
  }
  else {
    alert("Haw haw, you missed!");
  }

  console.log(board);

  if(hits == 3) {
    sunk = true;
    alert("You have sunk my ship!")
  }
}
else {
    alert("I don't have all day. Do it right this time.");
}
}
