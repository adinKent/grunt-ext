const grunt = require('grunt');
const taskRunner = require('../../index');
const task = require('./task');

grunt.registerConfigTask(task);

taskRunner.runTask('sample task').then((result) => {
  console.log('Get sample task result: ', result);
}).catch((e) => {
  console.log('Catch sample task error: ', e);
});
