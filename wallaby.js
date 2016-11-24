var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({});

module.exports = function () {
    return {
        files: [
            {pattern: 'node_modules/jquery/dist/jquery.js', instrument: false},
            {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', instrument: false},
            {pattern: 'src/*.js', load: false},
            {pattern: 'main.js', load: false},
            {pattern: 'index.html', load: false}
        ],

        tests: [
            {pattern: 'test/*Spec.js', load: false}
        ],

        postprocessor: wallabyPostprocessor,

        setup: function () {
            jasmine.getFixtures().fixturesPath = '';
            // required to trigger tests loading
            window.__moduleBundler.loadTests();
        }
    };
};