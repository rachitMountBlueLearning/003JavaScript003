const invert = require('../invert').exportObjects.invert;

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' , func: function(par = 1) {return par;}};
console.log(invert(testObject));