const grunt = require('grunt');
const taskRunner = require('../../index');
const taskConfig = require('./task');

grunt.registerConfigTask(taskConfig);

taskRunner.runTask('testTask').then((result) => {
  console.log('get task result: ', result);
});
