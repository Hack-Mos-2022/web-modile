module.exports = {
	root : true,
	env  : {
		browser : true,
		node    : true
	},
	parserOptions : {
		parser            : '@babel/eslint-parser',
		requireConfigFile : false
	},
	extends : [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins : [],
	// add your custom rules here
	rules   : {
		'no-multi-spaces' : 'off',
		'linebreak-style' : ['error', 'windows'],
		indent            : ['error', 'tab'],
		'key-spacing'     : [
			'error', {
				beforeColon : true,
				align       : 'colon'
			}
		],
		'no-tabs'                           : ['error', { allowIndentationTabs : true }],
		'func-names'                        : ['error', 'never'],
		'import/no-extraneous-dependencies' : 'off',
		'no-underscore-dangle'              : 'off',
		'no-mixed-spaces-and-tabs'          : 'off',
		'vue/html-indent'                   : ['error', 'tab'],
		'vue/html-closing-bracket-newline'  : 'off',
		'max-len'                           : 'off',
		'import/no-import-module-exports'   : 'off',
		'no-mixed-spaces-and-tab'           : 'off',
		'no-unused-vars'                    : 'off'
	}
}
