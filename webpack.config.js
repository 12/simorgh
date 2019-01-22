/* eslint-disable import/no-dynamic-require, global-require */
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  resolve: { extensions: [".js", ".jsx"] }, // resolves `import '../Foo'` to `../Foo/index.jsx`
  target: "node", // compile for server environment
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "simorgh.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: /src/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              cacheDirectory: true,
              presets: []
            }
          }
        ]
      }
    ]
  },
  externals: [
    /**
     * Prevents `node_modules` from being bundled into the server.js
     * And therefore stops `node_modules` being watched for file changes
     */
    nodeExternals({})
  ]
};
