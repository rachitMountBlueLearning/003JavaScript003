const keys = require('../keys').exportObjects.keys;

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(keys(testObject));