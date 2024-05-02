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

const { expect } = require("chai");
const sinon = require('sinon')
const Utils = require("./utils");
const sendPaymentRequestToApi = require('./3-payment');

describe("compare two add functions", function() {
  it("checks equality", function() {
    const spiedFunc = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spiedFunc.calledWith('SUM', 100, 20)).to.be.true;
    spiedFunc.restore();
  })});
