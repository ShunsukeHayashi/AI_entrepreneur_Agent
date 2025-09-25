import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Base ESLint flat config shared across workspaces.
 * Extend or override this configuration within service directories as implementations mature.
 */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.next/**",
      "**/coverage/**",
      "**/generated/**",
      "ai-engine/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        project: [
          "./frontend/tsconfig.json",
          "./backend/tsconfig.json",
        ],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "off",
      eqeqeq: ["error", "smart"],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
];
