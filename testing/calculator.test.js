const Calculator = require('../src/calculator.js');

describe('Calculator',()=>{
    describe('add', ()=>{
        test('Add numbers', ()=>{
            expect(new Calculator().add(4,9)).toBe(13);
            expect(new Calculator().add(-1, 8)).toBe(7);
            expect(new Calculator().add(5,5)).toBe(10);           
        });
    })
    describe('substract',()=>{
        test('substract two numbers', ()=>{
            expect(new Calculator().substract(8,4)).toBe(4);
            expect(new Calculator().substract(1,5)).toBe(-4);
            expect(new Calculator().substract(10,15)).toBe(-5);
        })
    });

    describe('multiply', () => {
        test('multiply two numbers', ()=>{
            expect(new Calculator().multiply(5,9)).toBe(45);
            expect(new Calculator().multiply(2,2)).toBe(4);
            expect(new Calculator().multiply(6,3)).toBe(18);
        } )
    });

    describe('divide', ()=>{
        test('divide two numbers', () =>{
            expect(new Calculator().divide(10,5)).toBe(2);
            expect(new Calculator().divide(5,2)).toBe(2.5);
            expect(new Calculator().divide(50,5)).toBe(10);
        })
    })
})