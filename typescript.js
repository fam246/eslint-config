module.exports = {
	"extends": [
		"./shared/non-rules.js", // Global settings
		"./shared/base.js", // Base configuration rules
		"@abhijithvijayan/eslint-config-airbnb/typescript", // Use `eslint-config-airbnb-typescript` to override conflicting rules from `eslint-config-airbnb-base`
		"plugin:@typescript-eslint/recommended", // Uses rules from `@typescript-eslint/eslint-plugin`
		"prettier/@typescript-eslint", // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
		"./shared/prettier.js", // Prettier rules
		"./shared/import.js", // Base `eslint-plugin-import` rules
		"plugin:import/typescript" // To support TypeScript usage of `eslint-plugin-import`
	],
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "res|next|^err|^_", // Ignore variables starting with underscore
				"ignoreRestSiblings": true,
				"caughtErrors": "all"
			}
		],
		"@typescript-eslint/type-annotation-spacing": "error"
	},
	"settings": {
		// Override `eslint-plugin-import` rule
		"import/resolver": {
			"node": {
				"extensions": [".ts", ".js", ".json"]
			}
		}
	}
}