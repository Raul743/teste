const nextTranslate = require('next-translate');
const withImages = require('next-images');
const path = require('path');

module.exports = nextTranslate({
  webpack: config => config,
});

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config;
  },
});
