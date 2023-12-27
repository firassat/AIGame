class State {
  fCost;
  constructor(GameState, parent, hCost, gCost) {
    this.GameState = GameState;
    this.parent = parent;
    this.hCost = hCost;
    this.gCost = gCost;
  }

  // حساب الكلفة الإجمالية
  calculateFCost() {
    this.fCost = this.gCost + this.hCost;
  }
}

export default State;
