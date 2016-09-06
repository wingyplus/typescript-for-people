function TextOperand(n) {
  this.n = n;
}

TextOperand.prototype.toText = function() {
  if (this.n === 2) return 'Two';
  return 'One';
};

module.exports = TextOperand;
