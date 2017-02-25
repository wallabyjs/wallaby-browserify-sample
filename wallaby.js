var wallabify = require('wallabify');
var hbsfy = require('hbsfy').configure({
  extensions: ['hbs'],
  global: true
});

var wallabyPostprocessor = wallabify({}, b => b.transform(hbsfy));

module.exports = function () {
  return {

    files: [
      {pattern: 'src/**/*.js', load: false},
      {pattern: 'src/**/*.hbs', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js', load: false}
    ],

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
