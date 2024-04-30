// 0-console.test.js

const displayMessage = require('../0-console');

describe('Task 0: displayMessage function', () => {
  it('should display the message passed as an argument', () => {
    // Mock console.log to capture output
    const mockLog = jest.spyOn(console, 'log');
    const message = 'Hello NodeJS!';
    displayMessage(message);
    expect(mockLog).toHaveBeenCalledWith(message);
  });
});
