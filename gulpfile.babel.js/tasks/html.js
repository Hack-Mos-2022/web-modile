/**
 * Html Task
 */

// Gulp
import gulp from 'gulp';

// Config

// Plugins
import plumber     from 'gulp-plumber';
import notify      from 'gulp-notify';
import twig        from 'gulp-twig';
import data        from 'gulp-data';
import browserSync from 'browser-sync';
import path        from 'path';
import fs          from 'fs';
import beautify    from 'gulp-jsbeautifier';
import { html as config } from '../config/app';

// Generating task from TWIG to HTML
export default () => gulp.src(config.src, { base : config.base })
	// Catching error
	.pipe(plumber({
		errorHandler : notify.onError((error) => ({
			title   : 'HTML',
			message : error.message,
		})),
	}))
	// Read Json data
	// eslint-disable-next-line consistent-return
	.pipe(data((file) => {
		const filePath = `${config.data + path.basename(file.path)}.json`;
		if (fs.existsSync(filePath)) {
			return JSON.parse(fs.readFileSync(filePath));
		}
	}))
	// Generates from twig to html
	.pipe(twig({
		onError : () => {
			notify.onError((error) => ({
				title   : 'TWIG',
				message : error.message,
			}));
		},
	}))
	// HTML formatting
	.pipe(beautify({
		unformatted : ['script', 'code', 'pre'],
		html        : {
			indent_char      : '   ',
			indent_with_tabs : true,
			js               : {
				indent_size : '   ',
			},
			css : {
				indent_size : '   ',
			},
		},
	}))
	// Upload to destination folder
	.pipe(gulp.dest(config.dest))
	// live updates html
	.pipe(browserSync.stream({ once : true }));
