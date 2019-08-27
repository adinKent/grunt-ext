const grunt = require('grunt');

function taskErrorHandling(taskName, error) {
  grunt.log.error(`Task ${taskName} failed: ${error.message}`);
  if (grunt.task._runningMainTask && grunt.task._runningMainTask !== taskName) {
    grunt.setTaskResult(grunt.task._runningMainTask, false, {
      taskName,
      error,
    });
    grunt.task._runningMainTask = null;
    grunt.task.clearQueue(); // Don't procced pending tasks if any error occured
  } else {
    grunt.setTaskResult(taskName, false, error);
  }
}

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
      if (!grunt.task._runningMainTask) { // Task might reply on another task which also has prior tasks
        grunt.task._runningMainTask = taskName;
      }

      try {
        if (target !== 'end') {
          preTasks.push(`${taskName}:end`);
          grunt.task.run(preTasks);
        } else {
          grunt.removeTaskResult(taskName);
          const result = await taskConfig.task.call(this, grunt.getTaskPayload(taskName));
          grunt.setTaskResult(taskName, true, result);
          grunt.removeTaskPayload(taskName, undefined);
        }
      } catch (error) {
        taskErrorHandling(taskName, error);
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
        grunt.setTaskResult(taskName, true, result);
        grunt.removeTaskPayload(taskName);
      } catch (error) {
        taskErrorHandling(taskName, error);
      } finally {
        done();
      }
    });
  }
};
