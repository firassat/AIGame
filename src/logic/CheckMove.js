class CheckMove {
  checkUp(game) {
    const board = game.board;
    let b = 0,
      w = 0;
    board.map((row, i) => {
      row.map((cell, j) => {
        if (cell > 2 && cell !== 10) {
          board[i][j - 1] !== 0 && board[i][j - 1] !== undefined
            ? (b = 1)
            : board[i][j - 1] === 10 &&
              (board[i][j - 2] !== 0 ||
                board[i][j - 2] !== undefined ||
                board[i][j - 2] === 2 ||
                board[i][j - 2] !== 10)
            ? (b = 1)
            : cell === 3 && board[i][j - 1] === 2
            ? (w = 1)
            : null;
        }
      });
    });
    return [b, w];
  }
  checkDown(game) {
    const board = game.board;
    let b = 0,
      w = 0;
    board.map((row, i) => {
      row.map((cell, j) => {
        if (cell > 2 && cell !== 10) {
          board[i][j + 1] !== 0 && board[i][j + 1] !== undefined
            ? (b = 1)
            : board[i][j + 1] === 10 &&
              (board[i][j + 2] !== 0 ||
                board[i][j + 2] !== undefined ||
                board[i][j + 2] === 2 ||
                board[i][j + 2] !== 10)
            ? (b = 1)
            : cell === 4 && board[i][j - 1] === 2
            ? (w = 1)
            : null;
        }
      });
    });
    return [b, w];
  }
  checkLeft(game) {
    const board = game.board;
    let b = 0,
      w = 0;
    board.map((row, i) => {
      row.map((cell, j) => {
        if (board[i - 1] !== undefined && cell > 2 && cell !== 10) {
          board[i - 1][j] !== 0
            ? (b = 1)
            : board[i - 1][j] === 10 &&
              (board[i - 1][j] !== 0 ||
                board[i - 1][j] !== undefined ||
                board[i - 1][j] === 2 ||
                board[i - 1][j] !== 10)
            ? (b = 1)
            : cell === 5 && board[i - 1][j] === 2
            ? (b = 1)
            : null;
        }
      });
    });
    return [b, w];
  }
  checkRight(game) {
    const board = game.board;
    let b = 0,
      w = 0;
    board.map((row, i) => {
      row.map((cell, j) => {
        if (board[i + 1] !== undefined && cell > 2 && cell !== 10) {
          board[i + 1][j] !== 0
            ? (b = 1)
            : board[i + 1][j] === 10 &&
              (board[i + 1][j] !== 0 ||
                board[i + 1][j] !== undefined ||
                board[i + 1][j] === 2 ||
                board[i + 1][j] !== 10)
            ? (b = 1)
            : cell === 6 && board[i + 1][j] === 2
            ? (b = 1)
            : null;
        }
      });
    });
    return [b, w];
  }
}

export default CheckMove;
