const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  watch: true,
  output: {
    path: path.join(__dirname, `public`),
    filename: `bundle.js`
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    port: 8088,
    watchContentBase: true
  }
};
