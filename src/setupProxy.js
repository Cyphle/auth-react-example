const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  console.log('enable proxy');
  app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8089',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
  );
};
