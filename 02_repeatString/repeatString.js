const repeatString = function(word, num) {
    let string = "";
    if(num < 0) {
        return "ERROR";
    }
    else {
        for(i = 0; i < num; i++) {
            string += word;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
