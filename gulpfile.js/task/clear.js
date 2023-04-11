const del = require('del');

// Delete directory
const clear = () => {
  return del($.path.root);
}

module.exports = clear;