describe('TextOperand', function() {
  const TextOperand = require('../text-operand');

  it('should be "One" when number is 1', function() {
    let operand = new TextOperand(1);
    expect(operand.toText()).toEqual('One');
  });

  it('should be "Two" when number is 2', function() {
    let operand = new TextOperand(2);
    expect(operand.toText()).toEqual('Two');
  });
});
