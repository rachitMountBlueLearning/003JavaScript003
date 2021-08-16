// function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
// }


exportObjects = {
    values (obj) {
        const valuesList = [];
        for(property in obj) {
            if(!(property instanceof Function)) {
                valuesList.push(obj[property]);
            }
        }
        return valuesList;
    }
}
module.exports = {exportObjects};