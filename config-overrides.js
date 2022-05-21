// config-overrides.js
const { override, addBabelPlugins } = require("customize-cra");

// module.exports = override(false);
module.exports = override(addBabelPlugins("transform-remove-console"));
