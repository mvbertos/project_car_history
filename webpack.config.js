import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { output } from "three/tsl";
import { watch } from "node:fs";
import test from "node:test";
import { type } from "node:os";

export default {
  mode: "development",
  entry: "./src/js/index.js",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
    ],
  },
};
