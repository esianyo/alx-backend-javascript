// 4-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('calculatePaymentTotal (from 4-payment.js)', function() {
  it('should calculate the total correctly', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120); // Mock return value
    const totalAmount = 100;
    const totalShipping = 20;

    const result = sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(result).to.equal(120);
    expect(calculateNumberStub.calledWith(totalAmount, totalShipping)).to.be.true;

    calculateNumberStub.restore();
  });

  it('should throw an error for non-numeric input', function() {
    expect(() => sendPaymentRequestToApi('invalid', 20)).to.throw('Invalid total amount or shipping cost');
    expect(() => sendPaymentRequestToApi(100, 'invalid')).to.throw('Invalid total amount or shipping cost');
  });
});
