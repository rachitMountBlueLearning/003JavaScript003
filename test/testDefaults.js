const defaults = require('../defaults').exportObjects.defaults;

const testObject = {location: 'Gotham' , func: function(par = 1) {return par;}};
const testProps = {secretIdentity: 'Batman', age: 54, catchPhrase: "I'm Batman!!!", name: 'Bruce Wayne', netWorth: '3.2 Trillion'}
console.log(defaults(testObject, testProps));