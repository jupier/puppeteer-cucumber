const {defineSupportCode} = require('cucumber');
const assert = require('assert');

defineSupportCode(({When, Then}) => {
    When('I increment an integer', function() {
        this.integer = this.integer + 1;
    });

    Then(/The integer is equal to (.*)$/, function(integer) {
        return assert.equal(integer, this.integer)
    });
});