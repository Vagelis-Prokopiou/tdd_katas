// const RomanNumeral = require('../src/roman-numerals');

describe('RomanNumeral.get(n)', function()
{
    it('should return the right Roman numeral, given a number', function()
    {
        const romanNumeral = new RomanNumeral();
        expect(romanNumeral.get(1)).toBe('I');
        expect(romanNumeral.get(2)).toBe('II');
        expect(romanNumeral.get(3)).toBe('III');
        expect(romanNumeral.get(4)).toBe('IV');
        expect(romanNumeral.get(5)).toBe('V');
        expect(romanNumeral.get(6)).toBe('VI');
        expect(romanNumeral.get(7)).toBe('VII');
        expect(romanNumeral.get(8)).toBe('VIII');
        expect(romanNumeral.get(9)).toBe('IX');
        expect(romanNumeral.get(10)).toBe('X');
        expect(romanNumeral.get(49)).toBe('XLIX');
        expect(romanNumeral.get(71)).toBe('LXXI');
        expect(romanNumeral.get(89)).toBe('LXXXIX');
        expect(romanNumeral.get(99)).toBe('XCIX');
        expect(romanNumeral.get(707)).toBe('DCCVII');
        expect(romanNumeral.get(1801)).toBe('MDCCCI');
    });
});
