const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  publicPath: '/portfolio-julie/', // ne pas oublier la config de la base pour le déploiement Github Pages
  transpileDependencies: true,
    configureWebpack: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    },
})
