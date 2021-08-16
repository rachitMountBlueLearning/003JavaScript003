const pairs = require('../pairs').exportObjects.pairs;

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(pairs(testObject));