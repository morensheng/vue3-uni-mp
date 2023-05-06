module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        // "standard",
        'eslint:recommended',
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        // "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": false,
        },
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
