module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler'],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "react-compiler/react-compiler": "error",
    "no-warning-comments": ["error", { "terms": ["todo", "fixme"], "location": "start" }],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CommentBlock",
        "message": "Unexpected block comment."
      },
      {
        "selector": "CommentLine",
        "message": "Unexpected line comment."
      }
    ]
  }
}
