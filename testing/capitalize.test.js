const capitalize = require('../src/capitalize.js');

describe('capitalize', () => {
    test('capitalize string', () => {
        expect(capitalize('ruri')).toBe('Ruri')
    })
    test('Throw an Error When the string exced 10 characters', () =>{
        // Arrange
        const input = 5;
        // act & Assert
        expect(() => {
            capitalize(input);
        }).toThrow('Input must be a string.');
    })
    test('Throw an Error when the string is Empty', () => {
        // Arrange
        const input = '';
        // Act & Asert
        expect(()=>{
            capitalize(input);
        }).toThrow('Input must contain at least 1 caracter')
    })
})