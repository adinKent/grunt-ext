const grunt = require('grunt');

const env = grunt.option('env') || 'dev';
const envVariables = {
  dev: {
    __TEST_URL__: 'https://test.dev.com',
  },
  qa: {
    __TEST_URL__: 'https://test.qa.com',
  },
};
const targetEnvVariables = envVariables[env] || envVariables.dev;

module.exports = {
  __TEST_API_TOKEN__: 'TEST_TOKEN',
  ...targetEnvVariables,
};
