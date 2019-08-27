const grunt = require('grunt');

const taskResultMap = new Map();
grunt.getTaskResult = function(taskName) {
  return taskResultMap.get(taskName);
};

grunt.setTaskResult = function(taskName, success, result) {
  taskResultMap.set(taskName, {
    success,
    result,
  });
};

grunt.removeTaskResult = function(taskName) {
  taskResultMap.delete(taskName);
};
