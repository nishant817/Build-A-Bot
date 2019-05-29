module.exports = {
   devServer: {
      proxy: {
         '/api': {
            target: 'http://localhost:8081',
            changeOrigin: true, //webpac config to avoid cors error
         },
      },
   },
};