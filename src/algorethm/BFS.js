import Actions from "../logic/Actions";
import State from "../logic/State";
import _ from "lodash";

class BFS {
  solve(state) {
    const visited = [];
    const isnotvis = (game) => {
      let b = 1;
      visited.map((g) => {
        if (_.isEqual(g, game.board)) {
          b = 0;
        }
      });
      return b;
    };
    var queue = [state];
    visited.push(state.GameState.board);
    const action = new Actions();
    while (queue.length > 0) {
      var newState1 = queue.shift();
      if (action.checkWin(newState1.GameState)) {
        const state = visited.length;
        return { newState1, state };
      }
      const nextState = action.getNextState(newState1.GameState);

      nextState.map((state) => {
        if (isnotvis(state.state)) {
          const newState = new State(
            state.state,
            newState1,
            0,
            state.cost + newState1.gCost
          );

          queue.push(newState);
          visited.push(newState.GameState.board);
        }
      });
    }
    return null;
  }
  bfs(game) {
    const end = this.solve(new State(game, null, 0, 0));
    let cost = end.newState1 ? end.newState1.gCost : 0;
    var fullPath = [];
    var currentNode = end.newState1;
    const state = end.state;
    while (currentNode !== null) {
      fullPath.push(currentNode);
      currentNode = currentNode.parent;
    }

    return { fullPath, cost, state };
  }
}

export default BFS;
