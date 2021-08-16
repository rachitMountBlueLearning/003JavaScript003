const keys = require('../keys').exportObjects.keys;

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' , func: function(par = 1) {return par;}};
console.log(keys(testObject));