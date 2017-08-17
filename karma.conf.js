module.exports = function(config)
{
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            'src/RomanNumeral.js',
            'tests/RomanNumeral-Spec.js'
        ]
    });
};
