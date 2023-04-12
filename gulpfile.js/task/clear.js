const del = require('del');

// Delete directory
const clear = () => del($.path.root);

module.exports = clear;
