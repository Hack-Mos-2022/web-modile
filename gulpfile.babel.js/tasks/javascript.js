/**
 * Working with javascript Task
 */

// Gulp
import gulp from 'gulp';

// Config

// Plugins
import plumber        from 'gulp-plumber';
import notify         from 'gulp-notify';
import webpack        from 'webpack';
import gulpWebpack    from 'webpack-stream';
import browserSync    from 'browser-sync';
import { js as config } from '../config/app';

export default () => gulp.src(config.src)
	.pipe(plumber({
		errorHandler : notify.onError((error) => ({
			title   : 'JavaScript',
			message : error.message,
		})),
	}))
	// eslint-disable-next-line global-require,import/extensions
	.pipe(gulpWebpack(require('../../webpack.config.js'), webpack))
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.stream());
