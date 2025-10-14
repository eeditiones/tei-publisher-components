import globals from "globals";
import eslint from "@eslint/js";
import openwc from "@open-wc/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import cypress from "eslint-plugin-cypress";
import chaiFriendly from "eslint-plugin-chai-friendly";

export default [
  // Ignore common build/artifact folders (still honoring .gitignore via CLI flag)
  {
    ignores: [
      "dist/**",
      "lib/**",
      "css/**",
      "images/**",
      "demo/build/**",
      "test/cypress/fixtures/**",
      "test/cypress/screenshots/**",
      "test/cypress/videos/**",
      "test/cypress/downloads/**",
      "node_modules/**",
    ],
  },

  // Base ESLint recommended for JS with modern language settings
  {
    ...eslint.configs.recommended,
    languageOptions: {
      ...eslint.configs.recommended.languageOptions,
      ecmaVersion: 2023,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2023 },
    },
  },

  // Open WC flat config (Lit/Web Components rules and sensible defaults)
  ...openwc,

  // Disable formatting conflicts with Prettier (must come after other configs)
  eslintConfigPrettier,

  // Project-specific rules (migrated from .eslintrc.json)
  {
    rules: {
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lit-element",
              message:
                "Use 'lit' instead (see migration_plan/LIT-CONSOLIDATION.md).",
            },
            {
              name: "lit-html",
              message:
                "Use 'lit' instead (see migration_plan/LIT-CONSOLIDATION.md).",
            },
          ],
          patterns: ["lit-html/*"],
        },
      ],
    },
  },

  // Cypress tests (component/e2e)
  // Use plugin recommended config, but only for Cypress-related files
  {
    ...cypress.configs.recommended,
    files: [
      "test/cypress/**/*.{js,ts}",
      "**/*.cy.{js,ts}",
      "cypress/**/*.{js,ts}",
    ],
  },

  // Add chai-friendly for Cypress specs as well
  {
    files: [
      "test/cypress/**/*.{js,ts}",
      "**/*.cy.{js,ts}",
      "cypress/**/*.{js,ts}",
    ],
    plugins: {
      "chai-friendly": chaiFriendly,
    },
    rules: {
      "chai-friendly/no-unused-expressions": "error",
      "no-unused-expressions": "off",
    },
  },
];
