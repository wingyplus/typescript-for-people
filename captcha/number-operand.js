function NumberOperand(n) {
  this.n = n;
}

NumberOperand.prototype.toText = function() {
  return this.n.toString();
};

module.exports = NumberOperand;
