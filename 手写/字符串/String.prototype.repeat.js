String.prototype.repeat = function (count) {
    if (count < 0) {
        throw new RangeError("Count must be non-negative");
    }

    let repeatedString = "";
    for (let i = 0; i < count; i++) {
        repeatedString += this;
    }
    return repeatedString;
};