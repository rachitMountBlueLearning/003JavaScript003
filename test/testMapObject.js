const mapObject = require('../mapObject').exportObjects.mapObject;

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' , func: function(par = 1) {return par;}};
console.log(mapObject(testObject, (item) => 'Awesome ' + item));