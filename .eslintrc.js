module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
  rules: {
    // '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/camelcase': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // 'jest/no-commented-out-tests': 'off',
    // '@typescript-eslint/no-explicit-any': ['warn'],
    // '@typescript-eslint/interface-name-prefix': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/extensions": [
      "warn",
      "never",
      {
        svg: "always",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".js", ".tsx", ".ts"],
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.tsx"],
      },
    ],
  },
  overrides: [
    // generated files
    {
      files: ["./packages/client/src/types.ts", "**/__generated__/**"],
      rules: {
        // allow console logs in tools and tests
        camelcase: "off",
        "no-use-before-define": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
