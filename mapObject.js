// function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
// }


exportObjects = {
    mapObject (obj, cb) {
        for(property in obj) {
            if(!(obj[property] instanceof Function)) {
                obj[property] = cb(obj[property]);
            }
        }
        return obj;
    }
}
module.exports = {exportObjects};