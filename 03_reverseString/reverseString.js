const reverseString = function(str) {
    const reverseArr = [];
    const length = str.length - 1;

    for(let i = length; i >= 0; i--) {
        reverseArr.push(str[i]);
    }

    return reverseArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
