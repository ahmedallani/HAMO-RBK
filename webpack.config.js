const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: __dirname + "/client/src/index.jsx",
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/src/views/index.html",
      filename: "./index.html",
    }),
  ],
};
