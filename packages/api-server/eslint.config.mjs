import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/public/**",
      "**/static/**",
      "**/vendor/**",
      "**/logstash/**",
      "**/elasticsearch/**",
      //jest config
      "**/jest.config.js",
      // tests
      "**/__tests__/**",
      ]
  },
  {
    languageOptions: { globals: globals.browser, ecmaVersion: 2022 }
  },
  {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];