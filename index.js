module.exports = {
  "extends": [
    "airbnb",
    "airbnb-typescript"
  ],
  "plugins": [
    "modules-newline",
    "newline-after-if-condition"
  ],
  "rules": {
    "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 2, "multi": 1 }}],
    "react/jsx-handler-names": ["error", { "checkLocalVariables": true }],
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "@typescript-eslint/indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "react/function-component-definition": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external", "internal"],
          "unknown",
          ["parent", "sibling", "index"]
        ],
        "pathGroups": [
          {
            "pattern": "@/**",
            "group": "unknown"
          },
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }],
    "curly": ["error", "all"],
    "newline-after-if-condition/rule": ["error"],
    "newline-before-return": "error",
    "object-curly-newline": [
      "error",
      {
        "ImportDeclaration": { "minProperties": 2, "consistent": false, "multiline": true }
      }],
    "modules-newline/import-declaration-newline": "error",
    "modules-newline/export-declaration-newline": "warn",
    "react/jsx-key": "error",
    "react/prop-types": "off"
  }
}
