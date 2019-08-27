/**
 * It's a sample task with priro tasks
 * @module taskWithPretasks
 */
module.exports = {
  name: 'taskWithPretasks',
  desc: 'It\'s a sample task with priro tasks',
  /**
   * @description [sampleTask]{@link module:sampleTask}
   */
  preTasks: [
    { name: 'sampleTask' },
  ],
  /**
   * Execute task
   * @param {object} payload - The task's require data
   * @param {string} payload.input Input String
   * @return {string} The task's return data
   * @example <caption>Payload</caption>
   * {
   *   input: 'Input String'
   * }
   * @example <caption>Output</caption>
   * Task Result.
  */
  task(payload = {}) {
    const inputString = payload.inputString || 'Input String';
    console.log('Input String: ', inputString);
    return 'Task reulst';
  },
};
