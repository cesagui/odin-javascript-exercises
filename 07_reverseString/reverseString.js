const reverseString = function(arr) {
    let ret = [];
    for (let i = arr.length - 1; i >= 0; i--){
        ret.push(arr.charAt(i));
    }
    ret = ret.join("");

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
