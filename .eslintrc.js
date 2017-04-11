module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
