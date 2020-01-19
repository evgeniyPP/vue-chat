module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-alert': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'off',
    'no-caller': 'off',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-console': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
