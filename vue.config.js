module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://vue-test.gingerbd.com",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
