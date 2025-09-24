/**
 * Base ESLint flat config shared across workspaces.
 * Extend or override this configuration within service directories as implementations mature.
 */
export default [
  {
    ignores: ["node_modules/", "dist/", "build/", "coverage/", "**/generated/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": ["error", "smart"],
    },
  },
];
