/**
 * Webpack Config
 */

// Dependencies
import webpack from 'webpack';

// Config
import TerserPlugin        from 'terser-webpack-plugin';
import { env, js as config } from './gulpfile.babel.js/config/app';

// Plugins

const webpackConfig = {
	mode   : env.isProduction ? 'production' : 'development',
	entry  : config.entry,
	module : config.module,
	output : {
		filename : '[name].js',
	},
	optimization : {
		splitChunks : {
			cacheGroups : {
				common_vendors : {
					test    : /node_modules/,
					name    : 'vendors.min',
					chunks  : 'all',
					enforce : true,
				},
			},
		},
		minimize  : true,
		minimizer : [
			new TerserPlugin({
				parallel : 4,
				include  : /\.min\.js$/,
			}),
		],
	},
	plugins : [
		new webpack.BannerPlugin({
			banner : config.banner,
		}),

	],
};

if (env.isProduction) {
	console.log('\x1b[42m\x1b[30m%s\x1b[0m', 'Production mode');
	webpackConfig.devtool = 'source-map';
} else {
	console.log('\x1b[47m\x1b[31m%s\x1b[0m', 'Development mode');
}

module.exports = webpackConfig;
