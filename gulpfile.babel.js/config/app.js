import path          from 'path';
import tildeImporter from 'node-sass-tilde-importer';

const dest          = './app';
const src           = './source';
const isProduction  = process.argv.includes('--production');
const isDevelopment = !isProduction;


// Gulp config
const app = {
	env: {
		dest,
		src,
		isProduction,
		isDevelopment
	},
	// Config for browserSync
	browserSync: {
		// The address of the site to which you want to throw the proxy
		server: dest,
		// IP in the local network is used to open on other devices for example:
		// http://192.168.1.101:3000- the site itself,
		// http://localhost:3001- UI where everything is customizable
		// If you have several network cards, it makes sense to specify the ip you need below, it is not always automatically determined
		// correctly host : '192.168.1.101', It is forbidden to open the browser automatically
		open: false,
		// Clicks, Scroll and Input in form fields are mirrored on all devices connected to the server
		ghostMode: false,
		// Reboot the server at the start of the task
		reloadOnRestart: true,
		ui             : {
			// Custom port for the webkit inspector, any unused port can be used
			weinre: {
				port: 9090
			}
		}
	},

	// Scss config
	sass: {
		// Source path
		src: `${src}/sass/*.scss`,
		// Path to tracked files where changes can occur
		watch: `${src}/sass/**/*`,
		// The path where to put the generated file
		dest    : `${dest}/css`,
		settings: {
			// Style of the output file
			outputStyle: 'expanded',
			// Write logs, but don't crash
			errLogToConsole: true,
			// Importer ~
			importer: tildeImporter
		},
		// Path to css map
		map: '/map',
		// Config for autoprefixer
		prefix: {
			// Using the old grid style
			grid: true,
			// Don't support 2009 flexbox (IE9)
			flexbox: 'no-2009',
			// Remove obsolete prefixes
			remove: true,
			// Cascade prefixes
			cascade: false
		}
	},

	// Config for image processing and compression
	images: {
		// Src folder
		src: `${src}/images/assets/**/*.{jpg,jpeg,png,gif,svg}`,
		// Base folder
		base: './source/images/assets/',
		// Unload on detection here
		dest: `${dest}/images`,
		// Watch this folder
		watch: `${src}/images/assets/**/*.{jpg,jpeg,png,gif,svg}`,
		// PNG optimization settings
		png: {
			webp  : {
				quality: 85,
				effort : 4
			},
			oxipng: {
				optimization: 4,
				effort      : 2
			}
		},
		// JPG/JPEG optimization settings
		jpg: {
			webp   : {
				quality: 85,
				effort : 4
			},
			mozjpeg: {
				quality    : 85,
				progressive: true
			}
		}
	},

	// Config for building SVG sprite
	sprite: {
		src   : `${src}/images/sprite/*.svg`,
		dest,
		config: {
			dest     : '.',
			log      : 'verbose',
			shape    : {
				spacing  : { // Add indents (you need to change the values depending on the css sometimes there are not integers obtained)
					padding: 1
				},
				dimension: {
					precision: 0 // Floating point
				},
				transform: ['svgo']
			},
			dimension: {
				precision: 0 // Floating point
			},
			mode     : {
				css: {
					dest  : '.',
					prefix: '%s', // Class prefix
					sprite: 'images/sprite.svg',  // Path to svg which is substituted in scss
					bust  : false, // we remove the cachebustre in the image address
					render: {
						scss: {
							template: `${src}/sprite.scss.handlebars`, // path to template
							dest    : '../source/sass/helpers/_sprite.scss' // where to save the scss file
						}
					}
				}
			},
			variables: {
				now: +new Date()
			}
		}
	},

	// Config for building HTML
	html: {
		src : [`${src}/twig/pages/**/*.twig`],
		base: `${src}/twig/pages/`,
		// Watch this folder
		watch: [
			`${src}/twig/pages/**/*.{twig,htm}`, `${src}/twig/partial/*.{twig,htm}`, `${src}/twig/partial/**/*.{twig,htm}`,
			`${src}/twig/template/**/*.{twig,htm}`, `${src}/twig/data/**/*.json`
		],
		// Unload on detection here
		dest,
		data: `${src}/twig/data/`,
		map : false
	},

	// JavaScript build config
	js: {
		src: [
			`${src}/js/index.js`
		],
		// Banner
		banner: [
			'External js: ',
			'MoveTo https://github.com/hsnaydd/moveTo MIT ',
			'lite-youtube-embed https://github.com/paulirish/lite-youtube-embed MIT '
		].join('\n'),
		// Watch this folder
		watch: [`${src}/js/**/*.js`],
		// Unload on detection here
		dest: `${dest}/js`,
		// Webpack config
		entry  : {
			app      : path.join(__dirname, '../../source/js/index.js'),
			'app.min': path.join(__dirname, '../../source/js/index.js')
		},
		module : {
			rules: [
				{
					test   : /^(?!.*\.{test,min}\.js$).*\.js$/,
					exclude: /(node_modules)/,
					use    : {
						loader : 'babel-loader',
						options: {
							presets: [['@babel/preset-env']],
							plugins: [
								['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
								['@babel/plugin-proposal-class-properties'],
								['@babel/transform-runtime'],
								['@babel/plugin-proposal-object-rest-spread'],
								['@babel/plugin-transform-object-super'],
								['@babel/plugin-proposal-class-static-block']
							]
						}
					}
				},
				{
					test   : /\.s?css$/,
					include: /node_modules/,
					use    : [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		resolve: {
			alias: {
				Helpers: path.resolve(__dirname, '../../source/js/helpers/')
			}
		}
	}
};
const {
	      env,
	      html,
	      images,
	      js,
	      sass,
	      sprite
      }   = app;

export default app;
export {
	env, html, images, js, sass, sprite
};
