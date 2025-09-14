const { NxAppWebpackPlugin } = require("@nx/webpack/app-plugin");
const nodeExternals = require("webpack-node-externals");
const { join } = require("path");

module.exports = {
  target: "node",

  // 👇 Exclude node_modules, especially Prisma
  externals: [
    nodeExternals({
      allowlist: [/^@prisma\/client/, /^\.prisma/], // allow Prisma to be used
    }),
  ],

  output: {
    path: join(__dirname, "dist"),
    ...(process.env.NODE_ENV !== "production" && {
      devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    }),
  },

  plugins: [
    new NxAppWebpackPlugin({
      target: "node",
      compiler: "tsc",
      main: "./src/main.ts",
      tsConfig: "./tsconfig.app.json",
      assets: ["./src/assets"],
      optimization: false,
      outputHashing: "none",
      generatePackageJson: true,
      sourceMaps: true,
    }),
  ],
};
