var Path = require('path');

module.exports = {
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/lib'],
  testMatch: ['<rootDir>/spec/**/?(*.)spec.js'],
  clearMocks: true,
  errorOnDeprecated: false,
  setupFilesAfterEnv: ['<rootDir>/spec/jest_env_setup.js'],
  globals: {
    'TEST_FIXTURES_DIR': Path.resolve('test_fixtures/')
  }
};
