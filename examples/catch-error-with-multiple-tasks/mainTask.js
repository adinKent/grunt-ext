const grunt = require('grunt');

module.exports = {
  name: 'mainTask',
  desc: 'It\'s main task',
  preTasks: [
    { name: 'preTask' },
  ],
  task() {
    console.log(grunt.task);
    console.log('Executing main task');
  },
};
