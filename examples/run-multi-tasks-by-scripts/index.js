const grunt = require('grunt');
const taskRunner = require('../../index');
const task1Config = require('./task1');
const task2Config = require('./task2');

grunt.registerConfigTask(task1Config);
grunt.registerConfigTask(task2Config);

taskRunner.runTask('testTask2', {
  'testTask1': 'payload of task1'
}).then((result) => {
  console.log('get task result: ', result);
});
