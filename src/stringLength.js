function stringLength(str) {
    const strLong =  str.length;
    if (strLong === 0){
        throw new Error("String must contain at least 1 character.");
    }
    if (strLong > 10){
        throw new Error("String cannot exceed 10 characters.");
    }

    return strLong
}

module.exports = stringLength;

  