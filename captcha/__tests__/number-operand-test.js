describe('NumberOperand', function() {
  const NumberOperand = require('../number-operand');

  it('should be number in string type', function() {
    let operand = new NumberOperand(1);
    expect(operand.toText()).toEqual('1');

    operand = new NumberOperand(2);
    expect(operand.toText()).toEqual('2');
  });
});
