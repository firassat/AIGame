import Actions from "../logic/Actions";
import State from "../logic/State";
import _ from "lodash";

class DFS {
  visited = [];
  solve(state) {
    const isnotvis = (game) => {
      let b = 1;
      this.visited.map((g) => {
        if (_.isEqual(g, game.board)) {
          b = 0;
        }
      });
      return b;
    };
    const action = new Actions();
    const stack = [state];

    while (stack.length > 0) {
      const newState1 = stack.pop();

      if (action.checkWin(newState1.GameState)) {
        const state = this.visited.length;
        return { newState1, state };
      }
      console.log(this.visited.length);

      this.visited.push(newState1.GameState.board);
      const nextState = action.getNextState(newState1.GameState);
      nextState.map((state) => {
        if (isnotvis(state.state)) {
          stack.push(new State(state.state, newState1));
        }
      });
    }
    return null;
  }
  dfs(game) {
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

export default DFS;
