// filepath: /config-overrides.js
const path = require('path');

module.exports = function override(config) {
  if (config.output) {
    config.output.path = path.resolve(__dirname, 'dist'); // Change 'build' to 'dist'
  }
  return config;
};
