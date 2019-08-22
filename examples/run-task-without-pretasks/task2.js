module.exports = {
  name: 'testTask2',
  desc: 'It\'s a test task2',
  preTasks: [{
    name: 'testTask1',
  }],
  task() {
    console.log('Execute test task2');
    return 'Result of task2';
  },
};
