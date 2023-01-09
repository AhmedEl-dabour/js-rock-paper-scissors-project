const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const finalColumn = document.getElementById("final-column");
const computerScoreSpan = document.getElementById("computer-score");
const yourScoreSpan = document.getElementById("your-score");

rock.addEventListener("click", (e) => {
  const selection = {
    name: "rock",
    emoji: "✊🏻",
    beats: "scissors",
  };
  makeSelection(selection);
});

paper.addEventListener("click", (e) => {
  const selection = {
    name: "paper",
    emoji: "🤚🏻",
    beats: "rock",
  };
  makeSelection(selection);
});

scissors.addEventListener("click", (e) => {
  const selection = {
    name: "scissors",
    emoji: "✌🏻",
    beats: "paper",
  };
  makeSelection(selection);
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const allSelections = [
    {
      name: "rock",
      emoji: "✊🏻",
      beats: "scissors",
    },
    {
      name: "paper",
      emoji: "🤚🏻",
      beats: "rock",
    },
    {
      name: "scissors",
      emoji: "✌🏻",
      beats: "paper",
    },
  ];
  const randomIndex = Math.floor(Math.random() * 3);
  return allSelections[randomIndex];
}
