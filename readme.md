# grunt-ext
Grunt-ext extends Grunt in order to supporting additional features, such as executing task by script, declare tasks by configuration files.


## Installation
The package uses `yarn` as package manager. Use the following command to update dependenicies.
```JavaScript
yarn install
```

## Commands
```JavaScript
yarn run task <taskName>
```
- To execute a specified task. If taskName is empty, default task will print all available task and their description on console.
```JavaScript
yarn run task-debug <taskName>
```
- Same as `task`, the difference is that the command will show additional logs on console for debugging.
```JavaScript
yarn run task-windows-debug <taskName>
```
- Same as `task-debug`, the difference is that the command is for debugging on windows platform.
## Task Configs
```JavaScript
{
    name: 'taskName', // The task's name. You could trigger the task by the name through cli or script. The name should be unique in project
    desc: 'taskDesc', // The task's description
    config: {   // The config object will be set by grunt. You could use `grunt.config.get('taskname)` to get the config object anywhere.
        /*...*/
    },
    preTasks: [
        { name: 'preTask1' } // It's a optional configuration. If your task dependends on some prior tasks' results, you could define them by it.
    ],
    task: function(payload) {
        /*...*/  // Main function of your task. Do whatever you want in the function
    }
}
```

## Task Runner API

- You could trigger task throught `runTask`. First argument is the name of the task you want to execute.
Second argument is tasks' payloads during execution.
```JavaScript
import taskRunner from 'grunt-ext';

taskRunner#runTask(taskName[, taskPayload]) // A promise instance will be returned
```
- It's similar to function `runTask` but the function won't execute prior tasks even if the task defines priror tasks in configuration file.
```JavaScript
import taskRunner from 'grunt-ext';

taskRunner#runTaskNoPrior(taskName[, taskPayload]) // A promise instance will be returned
```
For more examples of Task Runner API, please refer [examples](examples).
## Examples
- Task Config
```JavaScript
module.exports = {
  name: 'MainTask',
  desc: 'It\'s a main task',
  config: {
    requestUrl: 'https://www.google.com.tw',
  },
  preTasks: [{
    name: 'preTask',
  }],
  task() {
    const requestUrl = grunt.config.get('mainTask');
    console.log('Execute test task2');
    return 'Result of task2';
  },
};
```
- Trigger task by cli
```JavaScript
yarn run task MainTask
```

- Trigger task by script
```JavaScript
import taskRunner from 'grunt-ext';

taskRunner.runTask('MainTask', {
    preTaskName: {
        loginId: 'admin',
        password: 'admin'
    }
}).then((result) => {
  console.log('get task result: ', result);
});
```

## Resources
- [Grunt](https://gruntjs.com/)
- [Visual Studio Code Extension - Task Panel](https://marketplace.visualstudio.com/items?itemName=BitLaboratory.task-panel)
