module.exports = {
  name: 'preTask',
  desc: 'It\'s a prior task',
  task() {
    console.log('Executing task fails');
    throw new Error('task error');
  },
};
