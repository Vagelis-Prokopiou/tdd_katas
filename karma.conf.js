module.exports = function(config)
{
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [
            './src/roman-numerals.js',
            './tests/tests.js'
        ]
    });
};
