class Calculator {
    // add
    add(a,b) {
        return a + b
    }

    substract(a,b) {
        return a - b
    }

    // multiply
    multiply(a,b) {
        return a * b
    }

    // divide
    divide(a,b) {
        if (b === 0) {
            throw new Error('b divisor cannot be Zero.')
        }
        return a / b
    }
}

module.exports = Calculator;