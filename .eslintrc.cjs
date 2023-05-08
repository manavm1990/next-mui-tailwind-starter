module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "standard-with-typescript",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
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
  plugins: ["react", "testing-library", "jest-dom"],
  rules: {
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
    "no-unused-vars": ["error", { destructuredArrayIgnorePattern: "^_" }],
  },
};
