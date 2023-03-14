module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "parser": '@babel/eslint-parser',
        "requireConfigFile": false, // <== ADD THIS
        "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
        "sourceType": 'module' // Allows for the use of imports
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
