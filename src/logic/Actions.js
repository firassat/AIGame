import CheckMove from "./CheckMove";
import Move from "./Move";
import Print from "../print/Print";
import PrintNextState from "../print/PrintNextState";

class Action {
  checkWin(game) {
    let b = 0;
    game.board.map((row) => {
      row.map((cell) => {
        if (cell === 2) b = 1;
        return;
      });
    });
    if (b) return false;
    else return true;
  }
  move(game, keyM) {
    const move = new Move();
    const checkmove = new CheckMove();

    if (keyM[0] && checkmove.checkUp(game)[0]) {
      return move.moveUp(game);
    } else if (keyM[1] && checkmove.checkDown(game)[0]) {
      return move.moveDown(game);
    } else if (keyM[2] && checkmove.checkLeft(game)[0]) {
      return move.moveLeft(game);
    } else if (keyM[3] && checkmove.checkRight(game)[0]) {
      return move.moveRight(game);
    } else return game;
  }
  nextState(game) {
    const checkmove = new CheckMove();
    return {
      up: [checkmove.checkUp(game)[0], checkmove.checkUp(game)[1]],
      down: [checkmove.checkDown(game)[0], checkmove.checkDown(game)[1]],
      left: [checkmove.checkLeft(game)[0], checkmove.checkLeft(game)[1]],
      right: [checkmove.checkRight(game)[0], checkmove.checkRight(game)[1]],
    };
  }
  getNextState(game) {
    const move = new Move();
    const checkmove = new CheckMove();
    const allstate = [];

    if (checkmove.checkUp(game)[0]) {
      allstate.push({ state: move.moveUp(game), cost: 1 });
    }
    if (checkmove.checkDown(game)[0]) {
      allstate.push({ state: move.moveDown(game), cost: 2 });
    }
    if (checkmove.checkLeft(game)[0]) {
      allstate.push({ state: move.moveLeft(game), cost: 2 });
    }
    if (checkmove.checkRight(game)[0]) {
      allstate.push({ state: move.moveRight(game), cost: 1 });
    }
    return allstate;
  }
  print(game) {
    return Print(game.board);
  }
  printNextState(game) {
    return PrintNextState(game);
  }
  printAll(allstate) {
    let all = [];
    allstate.map((state) => {
      all.push(Print(state.GameState.board));
    });
    return all;
  }
}

export default Action;
