["1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach(id => {
document.getElementById(id).addEventListener("click", myFunction)
});

const PlayerType = {
   Player1: 1,
   Player2: 2
};

const myMap = new Map();

let currentPlayer = PlayerType.Player1;

function checkWinner() {
  if (myMap.size < 4)
    return;

  const field = [
      ["1","2","3"],
      ["4","5","6"],
      ["7","8","9"],
      ["1","4","7"],
      ["2","5","8"],
      ["3","6","9"],
      ["1","5","9"],
      ["3","5","7"]
    ];
  for (let combArrOfArrs of field) {
    let hasWinner = true;
    for (let combArrOfArr of combArrOfArrs) {
      let player = myMap.get(combArrOfArr);
      if (currentPlayer != player) {
        hasWinner = false;
        break;
      }
    }
    if (hasWinner) {
      alert("Win PLayer" + currentPlayer);
      return true;
    }
  }
  return false;
};

 function restartGame() {
   ["1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach(id => {
     document.getElementById(id).innerHTML = " ";
   });

   myMap.clear();
   currentPlayer = PlayerType.Player1;
};

function myFunction(event) {
  if (myMap.has(event.target.id))
    return;
  let result = false;
  if (currentPlayer == PlayerType.Player1) {
    event.target.innerText = "X";
    myMap.set(event.target.id, currentPlayer);
    result = checkWinner();
    currentPlayer = PlayerType.Player2;
  } else {
    event.target.innerText = "O";
    myMap.set(event.target.id, currentPlayer);
    result = checkWinner();
    currentPlayer = PlayerType.Player1;
  }
  if (myMap.size == 9 || result) {
    if(!result)
      alert("Draw");
    restartGame();
  }
};
