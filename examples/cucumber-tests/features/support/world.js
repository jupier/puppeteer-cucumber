var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.integer = 0
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})