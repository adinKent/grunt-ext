const grunt = require('grunt');
const initGruntConfig = require('./Gruntfile');

// hack to avoid loading a Gruntfile
// You can skip this and just use a Gruntfile instead
grunt.task.init = function () { };

initGruntConfig(grunt);

function cacheTaskPayload(taskPayload) {
  Object.keys(taskPayload).forEach((taskName) => {
    grunt.setTaskPayload(taskName, taskPayload[taskName]);
  });
}

module.exports = {
  runTask(taskName, taskPayload = {}) {
    cacheTaskPayload(taskPayload);

    return new Promise((resolve, fail) => {
      grunt.tasks([taskName], '', () => {
        const { success, result } = grunt.getTaskResult(taskName);
        if (success) {
          resolve(result);
        } else {
          fail(result);
        }
      });
    });
  },
  runTaskNoPrior(taskName, taskPayload = {}) {
    cacheTaskPayload(taskPayload);

    return new Promise((resolve, fail) => {
      grunt.tasks([`${taskName}:end`], '', () => {
        const { success, result } = grunt.getTaskResult(taskName);
        if (success) {
          resolve(result);
        } else {
          fail(result);
        }
      });
    });
  },
};
