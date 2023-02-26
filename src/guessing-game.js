class GuessingGame {
    constructor() {
      this.result;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.result = Math.ceil((this.max - this.min) / 2 + this.min);
      return this.result;
    }

    lower() {
      this.max = this.result - 1;
    }

    greater() {
      this.min = this.result + 1;
    }
}

module.exports = GuessingGame;
