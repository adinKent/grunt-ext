const grunt = require('grunt');
const taskRunner = require('../../index');
const mainTask = require('./mainTask');
const preTask = require('./preTask');

grunt.registerConfigTask(mainTask);
grunt.registerConfigTask(preTask);

taskRunner.runTask('mainTask').then((result) => {
  console.log('Get main task result: ', result);
}).catch((e) => {
  console.log('Catch main task error: ', e);
});
