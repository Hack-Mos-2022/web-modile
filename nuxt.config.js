export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr : false,

	// Target: https://go.nuxtjs.dev/config-target
	target : 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head : {
		title     : 'ВДНХ',
		htmlAttrs : {
			lang : 'ru'
		},
		meta : [
			{ charset : 'utf-8' }, {
				name    : 'viewport',
				content : 'width=device-width, initial-scale=1, viewport-fit=cover'
			},
			{
				hid     : 'description',
				name    : 'description',
				content : ''
			},
			{
				name    : 'format-detection',
				content : 'telephone=no'
			},
			{
				name    : 'msapplication-TileColor',
				content : '#141414'
			},
			{
				name    : 'theme-color',
				content : '#141414'
			}
		],

		link : [
			{
				rel   : 'apple-touch-icon',
				sizes : '180x180',
				href  : '/apple-touch-icon.png'
			},
			{
				rel   : 'icon',
				sizes : '32x32',
				type  : 'image/png',
				href  : '/favicon-32x32.png'
			},
			{
				rel   : 'icon',
				sizes : '16x16',
				type  : 'image/png',
				href  : '/favicon-16x16.png'
			},
			{
				rel  : 'icon',
				type : 'image/x-icon',
				href : '/favicon.ico'
			},
			{
				rel  : 'manifest',
				href : '/site.webmanifest'
			},
			{
				rel   : 'mask-icon',
				color : '#EF4850',
				href  : '/safari-pinned-tab.svg'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css : [
		// SCSS file in the project
		'@/assets/sass/app.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins : [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components : true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules : [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules : [
		[
			'@nuxtjs/axios',
			'nuxt-modernizr', {
				'feature-detects' : ['img/webp', 'css/overflow-scrolling'],
				options           : ['setClasses']
			}
		]
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios : {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL : '/'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build : {},

	// Router
	router : {
		extendRoutes (routes, resolve) {
			routes.push({
				name      : 'mobile-app',
				path      : '*',
				component : resolve(__dirname, 'pages/mobileApp.vue')
			})
		}
	}
}
