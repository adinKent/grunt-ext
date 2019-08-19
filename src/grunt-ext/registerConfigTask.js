const grunt = require('grunt');

grunt.registerConfigTask = (taskConfig) => {
  let preTasks = [];

  if (taskConfig.preTasks) {
    preTasks = taskConfig.preTasks.map((preTask) => {
      return preTask.name;
    });
  }

  const { name: taskName, config = {}, desc = '' } = taskConfig;
  grunt.config.set(taskName, config);

  if (preTasks.length > 0) {
    grunt.registerTask(taskName, desc, async function(target) {
      const done = this.async();
      try {
        if (target !== 'end') {
          preTasks.push(`${taskName}:end`);
          grunt.task.run(preTasks);
        } else {
          grunt.removeTaskResult(taskName);
          const result = await taskConfig.task.call(this, grunt.getTaskPayload(taskName));
          grunt.setTaskResult(taskName, result);
          grunt.removeTaskPayload(taskName, undefined);
        }
      } catch (error) {
        grunt.fail.fatal(`Task ${taskName} failed:` + error.message);
      } finally {
        done();
      }
    });
  } else {
    grunt.registerTask(taskName, desc, async function() {
      const done = this.async();
      try {
        grunt.removeTaskResult(taskName);
        const result = await taskConfig.task.call(this, grunt.getTaskPayload(taskName));
        grunt.setTaskResult(taskName, result);
        grunt.removeTaskPayload(taskName);
      } catch(error) {
        grunt.fail.fatal(`Task ${taskName} failed:` + error.message);
      } finally {
        done();
      }
    });
  }
};
