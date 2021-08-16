// function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
// }


exportObjects = {
    defaults (obj, defaultProps) {
        for(property in defaultProps) {
            obj[property] = defaultProps[property];
        }
        return obj;
    }
}
module.exports = {exportObjects};