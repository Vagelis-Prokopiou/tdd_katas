const roman_numerals = require('../src/roman-numerals.js');
roman_numerals.log();

describe('test', function()
{
    it('should return true', function()
    {
        expect(roman_numerals.log()).toEqual("Working");
    })
});
