const capitalize = (string) => {
    if (typeof string !== 'string') {
        throw new Error('Input must be a string.');
    }
    
    if (string.length === 0) {
        throw new Error('Input must contain at least 1 caracter')
    }
    
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize