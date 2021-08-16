// function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
// }


exportObjects = {
    invert (obj) {
        invertedObject = {};
        for(property in obj) {
            if(obj[property] instanceof Function) {
                invertedObject[property] = obj[property];
            } else {
                invertedObject[obj[property]] = property;
            }
        }
        return invertedObject;
    }
}
module.exports = {exportObjects};