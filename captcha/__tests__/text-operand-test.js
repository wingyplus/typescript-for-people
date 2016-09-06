describe('TextOperand', function() {
  const TextOperand = require('../text-operand');

  [
    { n: 1, expected: 'One' },
    { n: 2, expected: 'Two' },
    { n: 3, expected: 'Three' },
    { n: 4, expected: 'Four' },
    { n: 5, expected: 'Five' },
    { n: 6, expected: 'Six' },
    { n: 7, expected: 'Seven' },
    { n: 8, expected: 'Eight' },
    { n: 9, expected: 'Nine' },
    { n: 0, expected: 'Zero' },
  ].forEach(function(test) {
    it('should be "' + test.expected + '" when number is ' + test.n, function() {
      let operand = new TextOperand(test.n);
      expect(operand.toText()).toEqual(test.expected);
    });
  });

  it('should be empty string when number not match 1 digit', function() {
    let operand = new TextOperand(10);
    expect(operand.toText()).toEqual('');
  });
});
