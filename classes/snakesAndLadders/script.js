const diceElement = document.getElementById("dice");
const config = { duration: 1000, fill: "forwards" };
const players = {
  0: {
    element: document.getElementById("player1"),
    score: 0,
    bottom: 0,
    left: 0,
    dir: 1,
    turn: true,
  },
  1: {
    element: document.getElementById("player2"),
    score: 0,
    bottom: 0,
    left: 0,
    dir: -1,
    turn: false,
  },
};
let turn = 0;
diceElement.addEventListener("click", () => {
  turn = players[1].turn ? 1 : 0;
  const dice = Math.floor(Math.random() * 6) + 1;
  diceElement.innerHTML = dice;
  players[turn].score += dice;
  players[turn].left += dice;
  if (players[turn].left >= 10) {
    const ll = players[turn].left
    players[turn].left = 9;
    players[turn].bottom += 1;
    animate(9, 1, ll -players[turn].left);
    players[turn].dir = 'rtl'
  } else {
    animate(players[turn].left);
  }
  console.log(players[turn]);
  if (turn) {
    players[1].turn = false;
    players[0].turn = true;
    return;
  }
  players[1].turn = true;
  players[0].turn = false;
});
const animate = (left, bottom, onfinishLeft) => {
  players[turn].element.animate({ left: left * 75 + "px" }, config).onfinish =
    () => {
      players[turn].element.animate(
        { bottom: bottom * 75 + "px" },
        config
      ).onfinish = () => {
        players[turn].element.animate(
          { left: onfinishLeft * 75 + "px" },
          config
        );
      };
    };
};
