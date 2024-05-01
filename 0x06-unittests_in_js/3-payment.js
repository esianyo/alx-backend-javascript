// 3-payment.js

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const sum = Utils.calculateNumber(totalAmount, totalShipping);
    console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
