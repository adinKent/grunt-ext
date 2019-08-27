/**
 * It's a sample task
 * @module sampleTask
 */
module.exports = {
  name: 'sampleTask',
  desc: 'It\'s a sample task',
  /**
   * Execute task
   * @param {object} payload - The task's require data
   * @return {string} The task's return data
   * @example <caption>Output</caption>
   * Task Result.
  */
  task(payload) {
    console.log('Execute sample task');
    return 'Task reulst';
  },
};
