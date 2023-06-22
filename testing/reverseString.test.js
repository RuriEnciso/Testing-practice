const reverseString = require('../src/reverseString.js');

describe('reverString', ()=>{
    test('revert of  "hello" is "olleh"', () => {
        // Arrange
        input = 'hello';
        // act
        const result = reverseString(input);
        // Assert 
        expect(result).toEqual("olleh")
    });
})