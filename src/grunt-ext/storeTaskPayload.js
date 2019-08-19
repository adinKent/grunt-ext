const grunt = require('grunt');

const taskPayloadMap = new Map();
grunt.getTaskPayload = function(taskName) {
  return taskPayloadMap.get(taskName);
};

grunt.setTaskPayload = function(taskName, payload) {
  taskPayloadMap.set(taskName, payload);
};

grunt.removeTaskPayload = function(taskName, payload) {
  taskPayloadMap.delete(taskName);
};
