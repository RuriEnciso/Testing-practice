const stringLength = require('../src/stringLength.js');

describe('stringLength', () => {
    test('Count string caracters', () => {
        // Arrange
        const input = 'World'
        // act 
        const result = stringLength(input);
        // Assert
        expect(result).toBe(5);
    });

    test('Throw an Error When the string is empty', () =>{
        // Arrange
        const input = '';
        // act & Assert
        expect(() => {
            stringLength(input);
        }).toThrow('String must contain at least 1 character.');
    })

    test('Throw an Error When the string exced 10 characters', () =>{
        // Arrange
        const input = 'hi, this is a string that exced ten caracters';
        // act & Assert
        expect(() => {
            stringLength(input);
        }).toThrow('String cannot exceed 10 characters.');
    })
})


