const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/js/index.js"),
  },
  output: {
    publicPath: "/",
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // Creates `style` nodes from JS strings
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(png|jpe?g|gif|jfif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputpath: "images",
              // publicPath: "assets",
            },
          },
        ],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              esModule: false,
            },
          },
        ],
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },

      // {
      //   // Exposes jQuery for use outside Webpack build
      //   test: require.resolve("jquery"),
      //   use: [
      //     {
      //       loader: "expose-loader",
      //       options: "jQuery",
      //     },
      //     {
      //       loader: "expose-loader",
      //       options: "$",
      //     },
      //   ],
      // },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 9000,
    writeToDisk: true,
    stats: "errors-only",
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/login.html",
      filename: "login.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/new-acount.html",
      filename: "new-acount.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/tours.html",
      filename: "tours.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/tours2.html",
      filename: "tours2.html",
    }),

    new MiniCssExtractPlugin(),
  ],
};
