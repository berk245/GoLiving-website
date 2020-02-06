module.exports = {
  publicPath: "go-living-website",
  devServer: {
    proxy: {
      "/retrieve": {
        target: "https://goliving-api.herokuapp.com/"
      }
    }
  }
};
