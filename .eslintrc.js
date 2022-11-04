module.exports = {
	env : {
		browser : true,
		es2021  : true,
	},
	extends : [
		'airbnb-base',
	],
	parser        : '@babel/eslint-parser',
	parserOptions : {
		ecmaVersion : 'latest',
		sourceType  : 'module',
	},
	rules : {
		'no-multi-spaces' : 'off',
		'linebreak-style' : ['error', 'windows'],
		indent            : ['error', 'tab'],
		'key-spacing'     : [
			'error', {
				beforeColon : true,
				align       : 'colon',
			},
		],
		'no-tabs'                           : ['error', { allowIndentationTabs : true }],
		'func-names'                        : ['error', 'never'],
		'import/no-extraneous-dependencies' : 'off',
		'no-underscore-dangle'              : 'off',
		'max-len'                           : 'off',
		'import/no-import-module-exports'   : 'off',
	},
};
