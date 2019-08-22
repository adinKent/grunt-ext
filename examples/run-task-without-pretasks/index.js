const grunt = require('grunt');
const taskRunner = require('../../index');
const task1Config = require('./task1');
const task2Config = require('./task2');

grunt.registerConfigTask(task1Config);
grunt.registerConfigTask(task2Config);

taskRunner.runTaskNoPrior('testTask2', {
  testTask2: 'payload of task1',
}).then((result) => {
  console.log('Although task testTask2 defines prior tasks, running task by runTaskNoPrior won\'t run prior tasks');
  console.log('get task2 result: ', result);
});
