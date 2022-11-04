/**
 * Working with css/sass task
 */

// Gulp
import gulp from 'gulp';

// Config

// Plugins
import plumber     from 'gulp-plumber';
import notify      from 'gulp-notify';
import dartSass    from 'sass';
import gulpSass    from 'gulp-sass';
import sourcemaps  from 'gulp-sourcemaps';
import postcss     from 'gulp-postcss';
import prefixer    from 'autoprefixer';
import flexboxBug  from 'postcss-flexbugs-fixes';
import gulpif      from 'gulp-if';
import csso        from 'gulp-csso';
import browserSync from 'browser-sync';
import { sass as config, env } from '../config/app';

const scss = gulpSass(dartSass);

// Config for postcss
const processors = [
	prefixer(config.prefix),
	// Fixing a bug in flexbox
	flexboxBug,
];

export default () => gulp.src(config.src)
	// Catching error
	.pipe(plumber({
		errorHandler : notify.onError((error) => ({
			title   : 'Sass',
			message : error.message,
		})),
	}))
	// Initializing the css map
	.pipe(gulpif(env.isDevelopment, sourcemaps.init()))
	// Connect Sass with config
	.pipe(scss(config.settings))
	// Apply the Postcss config
	.pipe(postcss(processors))
	// Minification and css optimization
	.pipe(csso())
	// Write the css map to the final file,
	.pipe(gulpif(env.isDevelopment, sourcemaps.write(config.map)))
	// Write the final css to the folder
	.pipe(gulp.dest(config.dest))
	// live updates css
	.pipe(browserSync.stream());
