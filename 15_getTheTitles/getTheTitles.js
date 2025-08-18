const getTheTitles = function(arr) {
    return arr.reduce((arr, item) => {
        arr.push(item['title']);
        return arr;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
