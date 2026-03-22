'use strict';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function abs(a) {
  return Math.abs(a);
}

function round(a) {
  return Math.round(a);
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

function power(base, exp) {
  return base ** exp;
}

function sqrt(a) {
  return Math.sqrt(a);
}

module.exports = { add, subtract, abs, round, multiply, divide, modulo, power, sqrt };
