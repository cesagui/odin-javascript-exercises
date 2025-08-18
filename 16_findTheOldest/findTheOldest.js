const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) =>{
        if (!('yearOfDeath' in currentPerson)){
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        if ((currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)){
            return currentPerson;
        }
        return oldestPerson;
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
