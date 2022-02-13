const path = require("path");
module.exports = {
  //Spread sass variables to entire application
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/shared.scss";
        `
      }
    }
  },
  //@ char resolve for file structure
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
  //set limit for bundle limit
  configureWebpack: (config) => {
    //Change configuration for the production environment ...
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // Package file size configuration
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
};
