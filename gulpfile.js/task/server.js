// Static server
const server = () => {
  $.browserSync.init({
    server: {
      baseDir: $.path.root,
    },
  });
};

module.exports = server;
