/**
 * Task sampleTask.
 * @module sampleTask
 */
module.exports = {
  name: 'sampleTask',
  desc: 'It\'s a sample task',
  /**
   * Execute task
   * @param {object} payload - The task's require data
   * @return {string} The result of taksk.
  */
  task(payload) {
    console.log('Execute sample task');
    return 'task reulst';
  },
};
