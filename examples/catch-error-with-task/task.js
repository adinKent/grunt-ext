module.exports = {
  name: 'sample task',
  desc: 'It\'s a smaple task',
  task() {
    console.log('Executing sample task fails');
    throw new Error('task error');
  },
};
