let currentPlayer = Math.random() < 0.5 ? "X" : "O";
const board = Array(9).fill(null);
const parentDiv = document.getElementById("parent");
const buttons = Array.from(document.getElementsByClassName("box"));
alert(`First player: ${currentPlayer}`);
buttons.forEach((button, index) => {
  button.addEventListener("click", () => handleMove(index, button));
});
const handleMove = (index, button) => {
  if (board[index] !== null) return;
  board[index] = currentPlayer;
  button.textContent = currentPlayer;
  button.disabled = true;
  if (isWinner(currentPlayer)) {
    parentDiv.textContent = `${currentPlayer} is the winner!`;
    disableAllButtons();
  } else if (board.every((cell) => cell !== null)) {
    parentDiv.textContent = "It's a draw!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
};
const isWinner = (player) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === player)
  );
};
const disableAllButtons = () => {
  buttons.forEach((button) => (button.disabled = true));
};
