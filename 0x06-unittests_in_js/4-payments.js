// 4-payment.js

const Utils = require('./utils');

/**
 * Calculates the total amount for a payment by adding the total amount and total shipping cost.
 * @param {number} totalAmount The base amount of the payment.
 * @param {number} totalShipping The cost associated with shipping.
 * @returns {number} The combined total amount.
 * @throws {Error} If either `totalAmount` or `totalShipping` is not a number.
 */

function calculatePaymentTotal(totalAmount, totalShipping) {
  if (typeof totalAmount !== 'number' || typeof totalShipping !== 'number') {
    throw new Error('Invalid total amount or shipping cost');
  }
  const sum = Utils.calculateNumber(totalAmount, totalShipping);
  return sum;
}

module.exports = calculatePaymentTotal;
