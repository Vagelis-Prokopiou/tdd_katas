// const RomanNumeral = require('../src/RomanNumeral');

describe('RomanNumeral', function()
{
    var romanNumeral;
    beforeEach(function()
    {
        romanNumeral = new RomanNumeral();
    });
    afterEach(function()
    {
        romanNumeral = null;
    });
    it('should create different instances/objects', function()
    {
        const romanNumeral2 = new RomanNumeral();
        romanNumeral.name  = 'RomanNumeral1';
        romanNumeral2.name  = 'RomanNumeral2';
        
        expect(romanNumeral).not.toBe(romanNumeral2);
        expect(romanNumeral !== romanNumeral2).toBe(true);
        expect(romanNumeral === romanNumeral2).not.toBe(true);
        expect(romanNumeral === romanNumeral2).toBe(false);
        expect(romanNumeral.name).toBe('RomanNumeral1');
        expect(romanNumeral2.name).toBe('RomanNumeral2');
        expect(romanNumeral.name === romanNumeral2.name).toBe(false);
        expect(romanNumeral.name !== romanNumeral2.name).toBe(true);
    });
    
    describe('getNumeralFromNumber(n)', function()
    {
        it('should return the right Roman numeral, given a number', function()
        {
            expect(romanNumeral.getNumeralFromNumber(1)).toBe('I');
            expect(romanNumeral.getNumeralFromNumber(2)).toBe('II');
            expect(romanNumeral.getNumeralFromNumber(3)).toBe('III');
            expect(romanNumeral.getNumeralFromNumber(4)).toBe('IV');
            expect(romanNumeral.getNumeralFromNumber(5)).toBe('V');
            expect(romanNumeral.getNumeralFromNumber(6)).toBe('VI');
            expect(romanNumeral.getNumeralFromNumber(7)).toBe('VII');
            expect(romanNumeral.getNumeralFromNumber(8)).toBe('VIII');
            expect(romanNumeral.getNumeralFromNumber(9)).toBe('IX');
            expect(romanNumeral.getNumeralFromNumber(10)).toBe('X');
            expect(romanNumeral.getNumeralFromNumber(44)).toBe('XLIV');
            expect(romanNumeral.getNumeralFromNumber(49)).toBe('XLIX');
            expect(romanNumeral.getNumeralFromNumber(71)).toBe('LXXI');
            expect(romanNumeral.getNumeralFromNumber(89)).toBe('LXXXIX');
            expect(romanNumeral.getNumeralFromNumber(99)).toBe('XCIX');
            expect(romanNumeral.getNumeralFromNumber(707)).toBe('DCCVII');
            expect(romanNumeral.getNumeralFromNumber(1801)).toBe('MDCCCI');
        });
    });
    
    describe('getNumberFromNumeral(numeral)', function()
    {
        it('should throw Error if numeral is null', function()
        {
            // expect(romanNumeral.getNumberFromNumeral()).toThrowError('numeral should be a string');
        });
    });
});
