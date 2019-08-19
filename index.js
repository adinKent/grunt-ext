const grunt = require('grunt');
const initGruntConfig = require('./Gruntfile');

// hack to avoid loading a Gruntfile
// You can skip this and just use a Gruntfile instead
grunt.task.init = function () { };

initGruntConfig(grunt);

module.exports = {
  runTask(taskName, taskPayload = {}) {
    Object.keys(taskPayload).forEach((taskName)=>{
      grunt.setTaskPayload(taskName, taskPayload[taskName]);
    });

    return new Promise((resolve, fail) => {
      grunt.tasks([taskName], '', function() {
        const result = grunt.getTaskResult(taskName);
        resolve(result);
      });
    });
  }
};
