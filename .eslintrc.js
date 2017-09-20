/**
 * ESLint configuration file
 * See detailes here: https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {}
    },
    "globals": {},
    "rules": {
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always"],
        "no-console": "warn",
        "no-debugger": "error",
        "no-alert": "error",
        "curly": "error",
        "camelcase": "error",
        "capitalized-comments": [
            "error",
            "always",
            {
                "ignoreInlineComments": true
            }
        ],
        "eqeqeq": "error",
        "no-eq-null": "error",
        "class-methods-use-this": "error",
        "one-var": "error",
        "one-var-declaration-per-line": "error",
        "prefer-template": "warn",
        "no-useless-concat": "error",
        "prefer-const": "error",
        "no-magic-numbers": "error",
        "no-self-compare": "error"
    }
};