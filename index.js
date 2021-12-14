module.exports = {
  "extends": [
    "airbnb",
    "airbnb-typescript"
  ],
  "rules": {
    "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 2, "multi": 1 }}],
    "react/jsx-handler-names": ["error", { "checkLocalVariables": true }],
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off"
  }
}

