class GuessingGame {
    constructor() {
      this.max = null;
      this.min = null;
      this.average = null;
    }
    setRange(min, max) {
      this.min = min
      this.max = max;
    }
    
    guess() {
      this.average = this.calculateAverageNumber(this.min, this.max);
      return this.average
    }

    lower() {
      this.max = this.average;
    }

    greater() {
      this.min = this.average;
    }
    calculateAverageNumber (minValue, maxValue) {
      return Math.ceil((minValue + maxValue) / 2);
    }
}
module.exports = GuessingGame;
