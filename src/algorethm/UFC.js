import Actions from "../logic/Actions";
import State from "../logic/State";
import _ from "lodash";

class UFC {
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
    var visited = [];
    var queue = [state];
    visited.push(state.GameState.board);
    const action = new Actions();

    while (queue.length > 0) {
      let lowestFCostIndex = 0;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i].cost < queue[lowestFCostIndex].cost) {
          lowestFCostIndex = i;
        }
      }
      var newState1 = queue[lowestFCostIndex];
      queue.splice(lowestFCostIndex, 1);
      if (action.checkWin(newState1.GameState)) {
        return newState1;
      }
      const nextState = action.getNextState(newState1.GameState);

      nextState.map((state) => {
        if (isnotvis(state.state)) {
          const newState = new State(
            state.state,
            newState1,
            state.cost + newState1.cost
          );
          queue.push(newState);
          visited.push(newState.GameState.board);
        }
      });
    }
    return null;
  }
  ufc(game) {
    const end = this.solve(new State(game, null, 0));
    let cost = end?end.cost:0;
    var fullPath = [];
    var currentNode = end;
    while (currentNode !== null) {
      fullPath.push(currentNode);
      currentNode = currentNode.parent;
    }

    return {fullPath,cost};
  }
}

export default UFC;
