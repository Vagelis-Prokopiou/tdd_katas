// const RomanNumeral = require('../src/RomanNumeral');

describe('RomanNumeral.get(n)', function()
{
    it('should create different instances/objects', function()
    {
        const romanNumerall = new RomanNumeral();
        const romanNumeral2 = new RomanNumeral();
        romanNumerall.name  = 'RomanNumeral1';
        romanNumeral2.name  = 'RomanNumeral2';
        
        expect(romanNumerall).not.toBe(romanNumeral2);
        expect(romanNumerall !== romanNumeral2).toBe(true);
        expect(romanNumerall === romanNumeral2).not.toBe(true);
        expect(romanNumerall === romanNumeral2).toBe(false);
        expect(romanNumerall.name).toBe('RomanNumeral1');
        expect(romanNumeral2.name).toBe('RomanNumeral2');
        expect(romanNumerall.name === romanNumeral2.name).toBe(false);
        expect(romanNumerall.name !== romanNumeral2.name).toBe(true);
    });
    
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
