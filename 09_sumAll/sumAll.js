const sumAll = function(start, end) {
    let total = 0;
    if (typeof(start) != "number" || typeof(end) != "number"){
        return "ERROR";
    }
    if(start != Math.floor(start) || end != Math.floor(end)){
        return "ERROR";
    }
    if (end < 0 || start < 0){
        return "ERROR";
    }
    if (start > end){
        // swap the vals
        const temp = start;
        start = end;
        end = temp;
    }
    while(start <= end){
        total += start;
        start++;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
