import GameState from "./GameState";

class Move {
  moveUp(game) {
    const game2 = GameState.gameStateNewGame(game.board);
    const board = game2.board;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        const cell = board[i][j];
        const cellup = board[i][j - 1];
        if (cell > 2 && cell !== 10 && cellup === 1) {
          if (cellup !== undefined && cellup !== 0) {
            board[i][j - 1] = cell;
            board[i][j] = 1;
          }
        }
        if (board[i][j - 1] === 2 && board[i][j] === 3) {
          board[i][j - 1] = 1;
          board[i][j] = 1;
        }
        if (
          cell > 2 &&
          cell !== 10 &&
          board[i][j - 1] === 10 &&
          board[i][j - 2] !== undefined &&
          board[i][j - 2] === 1
        ) {
          board[i][j - 2] = 10;
          board[i][j - 1] = cell;
          board[i][j] = 1;
        }
      }
    }
    return GameState.gameStateNewGame(board);
  }
  moveDown(game) {
    const game2 = GameState.gameStateNewGame(game.board);
    const board = game2.board;
    for (let i = 0; i < board.length; i++) {
      for (let j = board[0].length - 1; j >= 0; j = j - 1) {
        const cell = board[i][j];
        const cellup = board[i][j + 1];
        if (cell > 2 && cell !== 10 && cellup === 1) {
          if (cellup !== undefined && cellup !== 0) {
            board[i][j + 1] = cell;
            board[i][j] = 1;
          }
        }
        if (board[i][j + 1] === 2 && board[i][j] === 4) {
          board[i][j + 1] = 1;
          board[i][j] = 1;
        }
        if (
          cell > 2 &&
          cell !== 10 &&
          board[i][j + 1] === 10 &&
          board[i][j + 2] !== undefined &&
          board[i][j + 2] === 1
        ) {
          board[i][j + 2] = 10;
          board[i][j + 1] = cell;
          board[i][j] = 1;
        }
      }
    }
    return GameState.gameStateNewGame(board);
  }
  moveLeft(game) {
    const game2 = GameState.gameStateNewGame(game.board);
    const board = game2.board;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i - 1] !== undefined) {
          const cell = board[i][j];
          if (cell > 2 && cell !== 10 && board[i - 1][j] === 1) {
            if (board[i - 1][j] !== 0) {
              board[i - 1][j] = cell;
              board[i][j] = 1;
            }
          }
          if (board[i - 1][j] === 2 && board[i][j] === 5) {
            board[i - 1][j] = 1;
            board[i][j] = 1;
          }
          if (
            cell > 2 &&
            cell !== 10 &&
            board[i - 1][j] === 10 &&
            board[i - 2] !== undefined &&
            board[i - 2][j] === 1
          ) {
            board[i - 2][j] = 10;
            board[i - 1][j] = cell;
            board[i][j] = 1;
          }
        }
      }
    }
    return GameState.gameStateNewGame(board);
  }
  moveRight(game) {
    const game2 = GameState.gameStateNewGame(game.board);
    const board = game2.board;
    for (let i = board.length - 1; i >= 0; i = i - 1) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i + 1] !== undefined) {
          const cell = board[i][j];

          if (cell > 2 && cell !== 10 && board[i + 1][j] === 1) {
            if (board[i + 1][j] !== 0) {
              board[i + 1][j] = cell;
              board[i][j] = 1;
            }
          }
          if (board[i + 1][j] === 2 && board[i][j] === 6) {
            board[i + 1][j] = 1;
            board[i][j] = 1;
          }
          if (
            cell > 2 &&
            cell !== 10 &&
            board[i + 1][j] === 10 &&
            board[i + 2] !== undefined &&
            board[i + 2][j] === 1
          ) {
            board[i + 2][j] = 10;
            board[i + 1][j] = cell;
            board[i][j] = 1;
          }
        }
      }
    }
    return GameState.gameStateNewGame(board);
  }
}

export default Move;
