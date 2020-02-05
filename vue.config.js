module.exports = {
  devServer: {
    proxy: {
      "/retrieve": {
        target: "https://goliving-api.herokuapp.com/"
      }
    }
  }
};
