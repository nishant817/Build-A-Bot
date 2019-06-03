module.exports = {
   devServer: {
      proxy: {
         '/api': {
            //target: 'http://localhost:8081',
            target: 'https://buildabotserver.azurewebsites.net',
            changeOrigin: true, //webpac config to avoid cors error
         },
      },
   },
};