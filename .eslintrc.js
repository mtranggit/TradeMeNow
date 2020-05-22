module.exports = {
  "extends": [
    "wesbos"
  ],
  "rules": {
    "no-console": 1,
    "global-require": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": [false, {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}],
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