"use strict";

let wallabify = require('wallabify');
let wallabyPostprocessor = wallabify({
        // browserify options, such as
        // insertGlobals: false
    }
    // you may also pass an initializer function to chain other
    // browserify options, such as transformers
    // , b => b.exclude('mkdirp').transform(require('babelify'))
);

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/jquery/dist/jquery.js', instrument: false},
            {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', instrument: false},
            {pattern: 'data/*.js', load: false},
            {pattern: 'ref/*.js', load: false},
            {pattern: 's_box/*.js', load: false},
            {pattern: 'src/*.js', load: false},
            {pattern: 'h/*.js', load: false},
            {pattern: 'main.js', load: false},
            {pattern: 'index.html', load: false}
        ],

        tests: [
            {pattern: 'spec/*Spec.js', load: false}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015']
            })
        },

        postprocessor: wallabyPostprocessor,

        setup: function () {
            jasmine.getFixtures().fixturesPath = '';
            // required to trigger tests loading
            window.__moduleBundler.loadTests();
        }
    };
};
