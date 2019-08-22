const grunt = require('grunt');

const taskResultMap = new Map();
grunt.getTaskResult = function(taskName) {
  return taskResultMap.get(taskName);
};

grunt.setTaskResult = function(taskName, success, response) {
  taskResultMap.set(taskName, {
    success,
    response,
  });
};

grunt.removeTaskResult = function(taskName) {
  taskResultMap.delete(taskName);
};
