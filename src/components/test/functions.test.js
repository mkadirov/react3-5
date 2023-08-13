import { sumDigit, getMax, revNum } from "./functions";

describe('sumDigit', () => {

    it('calculates the sum of digits', () => {
      expect(sumDigit(123)).toBe(6);
    });
  
    it('calculates the sum of digits for a negative number', () => {
      expect(sumDigit(-456)).toBe(15);
    });
  
    it('calculates the sum of digits for a single-digit number', () => {
      expect(sumDigit(9)).toBe(9);
    });
  
  });

describe('getMax', () => {
    it('find max between positive numbers', () => {
        expect(getMax(12, 33, 45)).toBe(45)
    });

    it('find max between negative numbers', () => {
        expect(getMax(-12, -33, -45)).toBe(-12)
    });

    it('find max between positive and negative numbers', () => {
        expect(getMax(-12, 33, -45)).toBe(33)
    });
  });

describe('revNum', () => {
    it('reverse a positive number', () => {
        expect(revNum(123)).toBe(321)
    });

    it('numbers with only 3 digits', () => {
        expect(revNum(22)).toBe(0)
    });

    it('reverse a negative number', () => {
        expect(revNum(-346)).toBe(-643)
    });
  });