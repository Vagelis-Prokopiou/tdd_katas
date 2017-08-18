// (function()
// {
const RomanNumeral = (function()
{
    const numerals     = [
        {value: 1000, 'numeral': 'M'},
        {value: 900, 'numeral': 'CM'},
        {value: 500, 'numeral': 'D'},
        {value: 100, 'numeral': 'C'},
        {value: 90, 'numeral': 'XC'},
        {value: 50, 'numeral': 'L'},
        {value: 40, 'numeral': 'XL'},
        {value: 10, 'numeral': 'X'},
        {value: 9, 'numeral': 'IX'},
        {value: 5, 'numeral': 'V'},
        {value: 4, 'numeral': 'IV'},
        {value: 1, 'numeral': 'I'}
    ];
    const RomanNumeral = function() {};
    
    RomanNumeral.prototype.getNumeralFromNumber = function(n)
    {
        var numeralString = '';
        
        numerals.forEach(function(item)
        {
            while (n >= item.value)
            {
                numeralString += item.numeral;
                n -= item.value;
            }
        });
        
        return numeralString;
    };
    
    RomanNumeral.prototype.getNumberFromNumeral = function(numeral)
    {
        if (numeral !== 'string')
        {
            throw new Error('numeral should be a string');
        }
    };
    
    return RomanNumeral;
})();


// module.exports = {
//     'RomanNumeral': RomanNumeral
// };
// })();


