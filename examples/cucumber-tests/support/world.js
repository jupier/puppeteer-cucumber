const {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.integer = 0
}

defineSupportCode(({setWorldConstructor}) => {
  setWorldConstructor(CustomWorld)
})