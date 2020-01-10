const sumTwoNumbers = require('./test-file');

it('should sum two numbers', () => {
    const result = sumTwoNumbers(2, 3);

    expect(result).toBe(5);
});
