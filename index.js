// Code your solution here

// Write functions using the filter() method so that 
//PickMeUp Taxi service employees can easily query the data

// findMatching() function
function findMatching(driversArray, nameString) {
    return driversArray.filter( (name) => {
        return name.toUpperCase() === nameString.toUpperCase();
    } );
};

// fuzzyMatch() function
function fuzzyMatch(driversArray, nameString) {
    return driversArray.filter( (name) => {
        return name[0].toUpperCase() === nameString[0].toUpperCase();
    } );
};

// matchName() function
function matchName(driversArray, nameString){
    return driversArray.filter( (driverName) => {
        return driverName.name === nameString;
    } );
};