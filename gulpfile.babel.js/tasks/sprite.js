/**
 * Sprite generation
 */

// Gulp
import gulp from 'gulp';

// Config

// Plugins
import plumber from 'gulp-plumber';
import notify  from 'gulp-notify';
import sprite  from 'gulp-svg-sprite';
import { sprite as config } from '../config/app';

export default () => gulp.src(config.src)
	// Catching error
	.pipe(plumber({
		errorHandler : notify.onError((error) => ({
			title   : 'Sprite',
			message : error.message,
		})),
	}))
	// Generating svg sprite
	.pipe(sprite(config.config))
	// Write the final css to the folder
	.pipe(gulp.dest(config.dest));
