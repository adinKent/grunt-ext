process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('axios-debug-log');
require('./lib');

const envVariables = require('./constants');
const tasks = require('./src/tasks');

module.exports = function (grunt) {
  grunt.initConfig({
    availabletasks: {
      tasks: {},
    },
    ...envVariables,
  });

  grunt.loadNpmTasks('grunt-available-tasks');

  grunt.registerTask('default', ['availabletasks']);

  tasks.forEach(grunt.registerConfigTask);
};
