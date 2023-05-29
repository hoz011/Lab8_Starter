// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('is valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    expect(functions.isPhoneNumber('098-765-4321')).toBe(true);
});

test('is invalid phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
    expect(functions.isPhoneNumber('123')).toBe(false);
});

test('is valid email', () => {
    expect(functions.isEmail('holly@ucsd.edu')).toBe(true);
    expect(functions.isEmail('hello123@gmail.com')).toBe(true);
});

test('is invalid email', () => {
    expect(functions.isEmail('hi@')).toBe(false);
    expect(functions.isEmail('123@123.hello')).toBe(false);
});

test('is strong password', () => {
    expect(functions.isStrongPassword('a123bcde')).toBe(true);
    expect(functions.isStrongPassword('hellothere1234')).toBe(true);
});

test('is weak password', () => {
    expect(functions.isStrongPassword('a1')).toBe(false);
    expect(functions.isStrongPassword('a123&')).toBe(false);
});

test('is valid date', () => {
    expect(functions.isDate('1/2/2000')).toBe(true);
    expect(functions.isDate('01/02/2000')).toBe(true);
});

test('is invalid date', () => {
    expect(functions.isDate('1/2/23')).toBe(false);
    expect(functions.isDate('100/1/2000')).toBe(false);
});

test('is valid hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
    expect(functions.isHexColor('#ab0f0f')).toBe(true);
})

test ('is invalid hex color', () => {
    expect(functions.isHexColor('#00')).toBe(false);
    expect(functions.isHexColor('0000')).toBe(false);
});