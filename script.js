const gameBoard = (() => {
  const boardArray = [];
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
