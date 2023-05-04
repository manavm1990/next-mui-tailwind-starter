module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [
    {
      files: ["./src/**/*.tsx"],
      rules: { "@typescript-eslint/explicit-function-return-type": 1 },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
