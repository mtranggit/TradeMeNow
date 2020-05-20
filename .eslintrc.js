module.exports = {
  "extends": [
    "wesbos"
  ],
  "rules": {
    "no-console": 1,
    "global-require": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 2,
      }
    ]
  }
}