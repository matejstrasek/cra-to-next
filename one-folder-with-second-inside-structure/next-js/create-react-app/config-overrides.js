const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  return alias({
    components: '../src/components',
  })(config);
};
