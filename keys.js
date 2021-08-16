// function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
// }


exportObjects = {
    keys (obj) {
        const keysList = [];
        for(property in obj) {
            if(!(obj[property] instanceof Function)) {
                keysList.push(property);
            }
        }
        return keysList;
    }
}
module.exports = {exportObjects};