const gameBoard = (() => {
  const boardArray = ["x", "o", "x"];
  return {
    boardArray,
  };
})(); //use a module

//use factory for players

const personFactory = (name, symbol) => {
  const sayPlay = () => console.log("lets play!");
  return { name, symbol };
};

const player1 = personFactory("player1", "X");
const player2 = personFactory("player2", "O");

//Need to render contents of  Gameboard boardArray into html
// 1. Begin by manually filling with Xs and Os and render to UI
//
