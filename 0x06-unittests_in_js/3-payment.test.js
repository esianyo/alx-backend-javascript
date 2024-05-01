// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with the correct arguments', function() {
        // Create a spy for Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify if Utils.calculateNumber was called with the correct arguments
        expect(calculateNumberSpy.calledWith(100, 20)).to.be.true;

        // Restore the spy
        calculateNumberSpy.restore();
    });
});
