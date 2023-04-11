const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
    // 'includes' will check to see if the item is in the 'args' array
};

// Do not edit below this line
module.exports = removeFromArray;
