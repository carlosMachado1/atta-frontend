/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        "semi": [
            "error",
            "never"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "indent": [
            "error",
            4
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "vue/no-mutating-props": [
            "error",
            {
                "shallowOnly": true
            }
        ]
    }
};
