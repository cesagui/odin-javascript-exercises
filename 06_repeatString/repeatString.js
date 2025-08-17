const repeatString = function(str, count) {
    let ret = "";
    if (count < 0){
        return "ERROR";
    }
    for (let i = 0; i < count; i++){
        ret += str;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
