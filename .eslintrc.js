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
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always"],
        "no-console": "warn",
        "no-debugger": "warn",
        "no-alert": "error",
        "curly": "error",
        "camelcase": "error",
        "eqeqeq": "error",
        "no-eq-null": "error",
        "class-methods-use-this": "error",
        "one-var": "error",
        "one-var-declaration-per-line": "error",
        "prefer-template": "warn",
        "no-useless-concat": "error",
        "prefer-const": "error",
        "no-magic-numbers": "warn",
        "no-self-compare": "error",
        "getter-return": "error",
        "no-extra-parens": "error",
        "no-prototype-builtins": "error",
        "no-template-curly-in-string": "error",
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": false,
                "MethodDefinition": false,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false
            }
        }],
        "valid-jsdoc": [
            "error",
            {
                "prefer": {
                    "arg": "param",
                    "argument": "param",
                    "class": "constructor",
                    "return": "returns",
                    "virtual": "abstract"
                },
                "preferType": {
                    "Boolean": "boolean",
                    "Number": "number",
                    "object": "Object",
                    "String": "string"
                },
                "requireReturn": true,
                "requireReturnType": true,
                "matchDescription": ".+",
                "requireParamDescription": true
            }
        ],
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "complexity": ["warn", 4],
        "consistent-return": ["error", {"treatUndefinedAsUnspecified": true}],
        "default-case": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "guard-for-in": "error",
        "no-caller": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-proto": "error",
        "no-script-url": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "vars-on-top": "error",
        "yoda": "error",
        "init-declarations": ["error", "always"],
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef-init": "error",
        "no-use-before-define": "error",
        "prefer-spread": "error",
    }
};
