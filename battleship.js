function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var cell1 = getRandomInt(1, 5);
var cell2 = cell1 + 1;
var cell3 = cell1 + 2;
var sunk = false;
var hits = 0;

while(!sunk) {
  guess = prompt("Enter a cell to shoot at (1-7)");

  if(Number.isInteger(parseInt(guess)) && (guess >= 1) && (guess <=7))
  {
  if((guess == cell1) || (guess == cell2) || (guess == cell3)){
    hits++;
    alert("Ouch! That hurt");
  }
  else {
    alert("Haw haw, you missed!");
  }

  if(hits == 3) {
    sunk = true;
    alert("You have sunk my ship!")
  }

  console.log("hits = " + hits);
}
else {
    alert("I don't have all day. Do it right this time.");
    console.log(Number.isInteger(parseInt(guess)));
}
}
