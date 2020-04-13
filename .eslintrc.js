module.exports = {
    "env": {
       "jest": true,
       "node": true
    },
    "extends": [
       "airbnb", // Uses rules from `eslint-config-airbnb`
       'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`
       "prettier",
       "prettier/@typescript-eslint" // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
       "ecmaVersion": 2020, // allows parsing of modern ECMAScript features
       "ecmaFeatures": {
          "classes": true,
          "impliedStrict": true,
          "jsx": true // allows parsing of jsx
       },
       "sourceType": 'module' // allows for the use of `imports`
    },
    "plugins": [
       "html",
       "prettier",
       "react-hooks",
       "@typescript-eslint"
    ],
    "rules": {
       "arrow-body-style": [
         "error",
         "as-needed",
         {
            "requireReturnForObjectLiteral":true
         }
       ],
       "comma-dangle": 0,
       "consistent-return": 0,
       "func-names": 0,
       "import": 0,
       "import/extensions": 0,
       "import/prefer-default-export": 0,
       "indent": [
          "error",
          "tab",
          {
             "SwitchCase": 1,
             "MemberExpression": 1,
             "ArrayExpression": 1,
             "ObjectExpression": 1,
             "ImportDeclaration": 1,
             "flatTernaryExpressions": false
          }
       ],
       "jsx-a11y/accessible-emoji": 0,
       "jsx-a11y/anchor-is-valid": [
          "warn",
          {
             "aspects": [
                "invalidHref"
             ]
          }
       ],
       "jsx-a11y/href-no-hash": "off",
       "max-len": 0,
       "no-alert": 0,
       "no-await-in-loop": 0,
       "no-console": 2,
       "no-debugger": 0,
       "no-param-reassign": [
          2,
          {
             "props": false
          }
       ],
       "no-restricted-syntax": [
          2,
          "ForInStatement",
          "LabeledStatement",
          "WithStatement"
       ],
       "no-return-assign": [
          "error",
          "except-parens"
       ],
       "no-shadow": [
          2,
          {
             "allow": [
                "resolve",
                "reject",
                "done",
                "next",
                "err",
                "error"
             ],
             "hoist": "all"
          }
       ],
       "no-underscore-dangle": 0,
       "no-unused-expressions": [
          2,
          {
             "allowTaggedTemplates": true
          }
       ],
       "no-unused-vars": [
          1,
          {
             "argsIgnorePattern": "res|next|^err",
             "ignoreSiblings": true
          }
       ],
       "prefer-const": [
          "error",
          {
             "destructuring": "all"
          }
       ],
       "prettier/prettier": [
          "error",
          {
             "printWidth": 120,
             "semi": true,
             "singleQuote": true,
             "tabWidth": 4,
             "trailingComma": "es5"
          }
       ],
       "quotes": [
          2,
          "single",
          {
             "allowTemplateLiterals": true,
             "avoidEscape": true
          }
       ],
       "radix": 0,
       "space-before-function-paren": [
          "error",
          {
             "anonymous": "never",
             "named": "never",
             "asyncArrow": "always"
          }
       ],
       "@typescript-eslint/no-use-before-define": "error",
       "@typescript-eslint/camelcase": [
          "error",
          {
             "allow": [
                "utm_campaign",
                "utm_content",
                "utm_medium",
                "utm_source",
                "utm_term",
                "utm_invalid",
                "content_name",
                "content_category",
                "api_plan"
             ]
          }
       ],
       "@typescript-eslint/class-name-casing": "error",
       "@typescript-eslint/no-inferrable-types": "error",
       "@typescript-eslint/type-annotation-spacing": "error"
    },
    "settings": {
       "import/resolver": {
          "node": {
             "extensions": [".js", ".json"]
          }
       },
       "react": {
          "version": 'detect', // tells `eslint-plugin-react` to auto detect react version
       }
    }
 }