const grunt = require('grunt');

const taskResultMap = new Map();
grunt.getTaskResult = function(taskName) {
  return taskResultMap.get(taskName);
};

grunt.setTaskResult = function(taskName, result) {
  taskResultMap.set(taskName, result);
};

grunt.removeTaskResult = function(taskName) {
  taskResultMap.delete(taskName);
};
