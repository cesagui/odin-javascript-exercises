const removeFromArray = function() {
    if (arguments.length < 2){
        throw new Error("Please provide the array and at least one item to be removed.");
    }
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        const num = arguments[i];
        while (arr.includes(num)){
            arr.splice(arr.indexOf(num), 1);
        }
        
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
