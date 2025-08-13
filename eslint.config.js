import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {
    // Genel ignore kalıpları
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '**/*.min.js', 'eslint.config.js'],
  },
  // JS çekirdek önerileri
  eslint.configs.recommended,
  // TS önerileri (type-checked)
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.node,
    },
    rules: {
      // Prettier kurallarını ESLint'e yüklemiyoruz; sadece eslint-config-prettier ile çakışmaları kapatıyoruz.
    },
  },
  prettier,
];
