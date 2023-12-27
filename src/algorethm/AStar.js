import Actions from "../logic/Actions";
import State from "../logic/State";
import _ from "lodash";

class AStar {
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
    const dis = (game) => {
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
          dist += Math.abs(i.x - j.x) + Math.abs(i.y - j.y);
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
        if (queue[i].fCost < queue[lowestFCostIndex].fCost) {
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
          let dist = dis(state.state);
          console.log(dist);
          const newState = new State(
            state.state,
            newState1,
            dist,
            state.cost + newState1.gCost
          );
          console.log(newState1);
          newState.calculateFCost();
          queue.push(newState);
          visited.push(newState.GameState.board);
        }
      });
    }
    return null;
  }
  astar(game) {
    const end = this.solve(new State(game, null, 0, 0));
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

export default AStar;
