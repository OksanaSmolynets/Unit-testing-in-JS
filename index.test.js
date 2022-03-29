const { firstNumber, isPalindromNumber, palindromOfNumSquare } = require('./index.js');

describe('firstNumber function', () => {
    test('first number is equal', () => {
        expect(firstNumber(24)).toBe(2);
        expect(firstNumber(100)).toBe(1);
        expect(firstNumber(-3400)).toBe(3);
        expect(firstNumber(98)).toEqual(9);
    });
    test('first number logic', () => {
        expect(firstNumber(24)).toBeDefined();
        expect(firstNumber(9)).toBeGreaterThanOrEqual(0);
        expect(firstNumber(0.5)).not.toBeLessThan(0);
    });
})

describe('isPalindromNumber function', () => {
    test('isPalindromNumber is equal', () => {
        expect(isPalindromNumber(99)).toBe(99);
        expect(isPalindromNumber(44)).toBe(44);
        expect(isPalindromNumber(22)).toBe(22);
        expect(isPalindromNumber(24)).toBe(0);
        expect(isPalindromNumber(100)).toBe(0);
        expect(isPalindromNumber(78)).toBe(0);
        expect(isPalindromNumber(78)).not.toBe(78);
    });
    test('isPalindromNumber logic', () => {
        expect(isPalindromNumber(100)).toBeDefined();
        expect(isPalindromNumber(75)).toBeFalsy();
        expect(isPalindromNumber(0)).toBeDefined();
        expect(isPalindromNumber(1)).toBeDefined();
        expect(isPalindromNumber(99)).not.toBeFalsy();
        expect(isPalindromNumber(77)).not.toBeFalsy();
        expect(isPalindromNumber(77)).not.toBeNull();
        expect(isPalindromNumber(45)).not.toBeNull();
    });
})

describe('palindromOfNumSquare function', () => {
    test('palindromOfNumSquare is equal', () => {
        expect(palindromOfNumSquare()).toContain(1);
        expect(palindromOfNumSquare()).toContain(11);
        expect(palindromOfNumSquare()).toContain(22);
        expect(palindromOfNumSquare()).toContain(2);
        expect(palindromOfNumSquare()[0]).toBe(1);
        expect(palindromOfNumSquare()[1]).toBeGreaterThan(1);
        expect(palindromOfNumSquare()).toEqual(expect.arrayContaining([1, 2, 3, 11, 22]));
    });
    test('palindromOfNumSquare logic', () => {
        expect(palindromOfNumSquare().some((item => item === 1))).toBe(true);
        expect(palindromOfNumSquare().some((item => item !== 1))).toBe(true);
        expect(palindromOfNumSquare().every((item => item === 1))).toBe(false);
        expect(palindromOfNumSquare().every((item => item === 0))).toBe(false);
        expect(palindromOfNumSquare()).toEqual(expect.not.arrayContaining([0]))
        expect(palindromOfNumSquare().length).toBe(5);
        expect(palindromOfNumSquare()).toBeDefined();
        expect(palindromOfNumSquare()).not.toBeFalsy();
        expect(palindromOfNumSquare()).not.toBeNull();
    });
})