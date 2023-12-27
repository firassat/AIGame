class GameState {
  constructor(board, keyPos) {
    this.board = board;
    this.keyPos = keyPos;
  }
  static gameStateNewGame(board) {
    let newboard = [];
    let keyPos = [];
    board.map((row, i) => {
      const newrow = [];
      row.map((col, j) => {
        newrow.push(col);
        if (col > 2 && col !== 10) {
          keyPos.push({ x: i, y: j });
        }
      });
      newboard.push(newrow);
    });

    return new GameState(newboard, keyPos);
  }
}

export default GameState;
