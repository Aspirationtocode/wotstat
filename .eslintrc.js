module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prefer-stateless-function': 'off',
  },
};
