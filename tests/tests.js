const getRomanNumeral = require('../src/roman-numerals.js').getRomanNumeral;

describe('getRomanNumeral(number)', function()
{
    it('should return the right Roman numeral, given a number', () =>
    {
        expect(getRomanNumeral(1)).toBe('X');
    });
});
