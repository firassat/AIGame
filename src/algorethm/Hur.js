import Actions from "../logic/Actions";
import State from "../logic/State";
import _ from "lodash";

class Hur {
  solve(state) {
    const isnotvis = (game) => {
      let b = 1;
      visited.map((g) => {
        if (_.isEqual(g, game.board)) {
          b = 0;
        }
      });
      return b;
    };
    const dis1 = (game) => {
      let k = [];
      let l = [];
      game.board.map((row, i) => {
        row.map((cell, j) => {
          if (cell === 2) {
            l.push({ x: i, y: j });
          }
          if (cell > 2) {
            k.push({ x: i, y: j });
          }
        });
      });
      let dist = 0;
      l.map((i) => {
        k.map((j) => {
          let dx1 = Math.abs(i.x - j.x);
          let dy1 = Math.abs(i.y - j.y);
          dist += Math.sqrt(dx1 * dx1 + dy1 * dy1);
        });
      });
      return dist;
    };
    const dis3 = (game) => {
      let k = [];
      let l = [];
      game.board.map((row, i) => {
        row.map((cell, j) => {
          if (cell === 2) {
            l.push({ x: i, y: j });
          }
          if (cell > 2) {
            k.push({ x: i, y: j });
          }
        });
      });
      let dist = 0;
      l.map((i) => {
        k.map((j) => {
          let dx1 = Math.abs(i.x - j.x);
          let dy1 = Math.abs(i.y - j.y);
          dist += 1 * (dx1 + dy1) + 1 * Math.min(dx1, dy1) * 0.001;
        });
      });
      return dist;
    };
    const dis2 = (game) => {
      let start = [];
      state.GameState.board.map((row, i) => {
        row.map((cell, j) => {
          if (cell > 2) {
            start.push({ x: i, y: j });
          }
        });
      });
      let k = [];
      let l = [];
      game.board.map((row, i) => {
        row.map((cell, j) => {
          if (cell === 2) {
            l.push({ x: i, y: j });
          }
          if (cell > 2) {
            k.push({ x: i, y: j });
          }
        });
      });
      let dist = 0;
      l.map((iv, i) => {
        k.map((j) => {
          let dx2 = start[i].x - j.x;
          let dy2 = start[i].y - j.y;
          let dx1 = iv.x - j.x;
          let dy1 = iv.y - j.y;
          let cross = Math.abs(dx1 * dy2 - dx2 * dy1);
          dist += cross * 0.001;
        });
      });
      return dist;
    };
    var visited = [];
    var queue = [state];
    visited.push(state.GameState.board);
    const action = new Actions();

    while (queue.length > 0) {
      let lowestFCostIndex = 0;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i].hCost < queue[lowestFCostIndex].hCost) {
          lowestFCostIndex = i;
        }
      }
      var newState1 = queue[lowestFCostIndex];
      queue.splice(lowestFCostIndex, 1);

      if (action.checkWin(newState1.GameState)) {
        const state = visited.length;
        return { newState1, state };
      }
      const nextState = action.getNextState(newState1.GameState);

      nextState.map((state) => {
        if (isnotvis(state.state)) {
          let dist = dis3(state.state);
          const newState = new State(state.state, newState1, dist);
          queue.push(newState);
          visited.push(newState.GameState.board);
        }
      });
    }
    return null;
  }
  hur(game) {
    const end = this.solve(new State(game, null, 0));
    console.log(end);
    let cost = end.newState1 ? end.newState1.gCost : 0;
    let state = end.state;
    var fullPath = [];
    var currentNode = end.newState1;
    while (currentNode !== null) {
      fullPath.push(currentNode);
      currentNode = currentNode.parent;
    }

    return { fullPath, cost, state };
  }
}

export default Hur;
