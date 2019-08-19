module.exports = {
  name: 'testTask',
  desc: 'It\'s a test task',
  task() {
    console.log('Execute test task');
    return 'Result of test task';
  },
};
