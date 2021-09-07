module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "sort-imports": 0,
    "object-curly-spacing": ["error", "never"],
    "simple-import-sort/imports": "error",
    "no-undef": "off",
    "react/prop-types": 0,
    "no-unused-vars": 1,
    "no-extra-parens": 0,
  },
}
