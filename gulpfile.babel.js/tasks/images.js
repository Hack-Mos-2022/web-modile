/**
 * Optimizing images Task
 */

// Gulp
import gulp from 'gulp';

// Config

// Plugins
import plumber  from 'gulp-plumber';
import notify   from 'gulp-notify';
import changed  from 'gulp-changed';
import gulpif   from 'gulp-if';
import squoosh  from 'gulp-squoosh';
import svgo     from 'gulp-svgmin';
import fileSize from 'gulp-size';
import { images as config } from '../config/app';

export default () => gulp.src(config.src, { base : config.base })
	// Catching error
	.pipe(plumber({
		errorHandler : notify.onError((error) => ({
			title   : 'Optimizing images',
			message : error.message,
		})),
	}))
	// Checks for changes in the final folder
	.pipe(changed(config.dest))
	// Optimize png
	.pipe(gulpif('**/*.png', squoosh(() => ({
		encodeOptions : config.png,
	}))))
	// Optimize jpg
	.pipe(gulpif('**/*.{jpg,jpeg}', squoosh(() => ({
		encodeOptions : config.jpg,
	}))))
	// Optimize svg
	.pipe(gulpif('**/*.svg', svgo({
		plugins : [{ removeViewBox : false }],
	})))
	// Measure the file size
	.pipe(fileSize({
		gzip      : false,
		showFiles : true,
	}))
	// Upload to destination folder
	.pipe(gulp.dest(config.dest));
