module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  globals: {
    $: true,
    require: true,
    process: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      files: [".eslintrc.{js,cjs}", "*test.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  ignorePatterns: ["./tests/*", "*test.js"],
  root: true,
};
