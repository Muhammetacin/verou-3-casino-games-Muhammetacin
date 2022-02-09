module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // [style-loader](/loaders/style-loader)
          {
            loader: "style-loader",
          },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
          },
          // [sass-loader](/loaders/sass-loader)
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
};
