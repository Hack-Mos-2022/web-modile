/**
 * Main task file
 */

import gulp from 'gulp';

// Config
import browserSync from 'browser-sync';
import app, {
	html, sass, js, images, env,
} from './config/app';

// Task
import taskHtml   from './tasks/html';
import taskImages from './tasks/images';
import taskJs   from './tasks/javascript';
import taksSass   from './tasks/sass';
import taskSprite from './tasks/sprite';

// Server
const server = () => {
	browserSync.init(app.browserSync);
};

// Watchers
const watcher = () => {
	gulp.watch(html.watch, gulp.series(taskHtml));
	gulp.watch(sass.watch, gulp.series(taksSass));
	gulp.watch(js.watch, gulp.series(taskJs));
	gulp.watch(images.watch, gulp.series(taskImages)).on('all', browserSync.reload);
};

const build = gulp.series(
	gulp.parallel(taskHtml, taskImages, taskJs, taksSass),
);

const dev = gulp.series(
	build,
	gulp.parallel(server, watcher),
);

// Public tasks
export {
	taskHtml, taskImages, taskJs, taksSass, taskSprite, server, dev,
};

// Gulp Default
export default env.isProduction ? build : dev;
