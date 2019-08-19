const grunt = require('grunt');

const env = grunt.option('env') || 'dev';
const envVariables = {
  dev: {
    __P3_SERVER_URL__: 'https://internal-cpe-nucleus-dev-p3-alb-2107615651.us-east-1.elb.amazonaws.com:8443',
    __NEXTGEN_API_URL__: 'https://internal-cpe-nucleus-dev-ecs-alb-2097841087.us-east-1.elb.amazonaws.com:8443',
  },
  qa: {
    __P3_SERVER_URL__: 'https://internal-cpe-nucleus-qa-p3-alb-2107615651.us-east-1.elb.amazonaws.com:8443',
    __NEXTGEN_API_URL__: 'https://qa-nonpci-payments.emdeon.net:8443',
  }
};
const targetEnvVariables = envVariables[env] || envVariables.dev;

module.exports = {
  __NEXTGEN_API_SENDER_ID__: 'AETNA_DEV_ID',
  __PAYMENT_API_ACCEPT_VERSION__: '2.0.0',
  ...targetEnvVariables,
};
