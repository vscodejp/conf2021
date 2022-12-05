module.exports = {
  extends: ['@nekohack/eslint-config-react'],
  plugins: ['@typescript-eslint'],
  root: true,
  env: { node: true, es6: true },
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
}
