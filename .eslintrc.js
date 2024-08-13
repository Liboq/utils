module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  extends: [
    'prettier',
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    project: ['./tsconfig.base.json', './tsconfig.eslint.json', './tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    'import/prefer-default-export': OFF,
    'unicorn/better-regex': ERROR,
    'unicorn/prevent-abbreviations': OFF,
    'react/jsx-indent-props': [ERROR, 4],
    'react/jsx-one-expression-per-line': OFF,
  },
 "ignorePatterns": [ "**/__test__/*.ts"],
}
