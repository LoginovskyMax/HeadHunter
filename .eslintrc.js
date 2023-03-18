module.exports = {
    extends: ['airbnb-angular'],
    settings: {
      "import/resolver": {
        typescript: {} 
      },
    },
    rules: {
    "global-require": "off",
    "import/extensions":"off",
    "no-empty-function":"off",
    "no-param-reassign":"off",
    "camelcase":"off",
    "dot-notation":"off",
    "no-plusplus":"off"
  },
   ignorePatterns: ["dist"],
  };