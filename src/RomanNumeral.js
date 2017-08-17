// (function()
// {
const RomanNumeral         = function() {};
RomanNumeral.prototype.get = function(providedNumber)
{
    const numerals = [
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
    
    var numeralString = '';
    
    numerals.forEach(function(item)
    {
        while (providedNumber >= item.value)
        {
            numeralString += item.numeral;
            providedNumber -= item.value;
        }
    });
    
    return numeralString;
};

// module.exports = {
//     'RomanNumeral': RomanNumeral
// };
// })();


