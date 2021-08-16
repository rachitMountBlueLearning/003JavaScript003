// function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
// }


exportObjects = {
    pairs (obj) {
        const pairsList = [];
        for(property in obj) {
            if(!(obj[property] instanceof Function)) {
                pairsList.push([property, obj[property]]);
            }
        }
        return pairsList;
    }
}
module.exports = {exportObjects};