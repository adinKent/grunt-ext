module.exports = {
  name: 'testTask1',
  desc: 'It\'s a test task1',
  task(payload) {
    console.log(`Execute test task1 and payload is "${payload}"`);
    return 'Result of task1';
  },
};
