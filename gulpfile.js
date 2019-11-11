var gulp = require('gulp');
var ts = require('gulp-typescript');
const browserify = require('browserify');
const tsify = require('tsify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

const extensions = ['.js', '.ts', '.json'];

const compileTs = () => {
	const bundle = browserify(path.join('.', 'test', 'ztst.ts'), {
		extensions: extensions,
		debug: true,

	    })
		.plugin(tsify, {
			lib: [
				"dom",
				"es2015",
				"es5",
				"es6"
			],
			target: "es5",
			module: "commonjs",
		})
		.transform(babelify, {
			presets: ["@babel/preset-env"],
			extensions: extensions,
			sourceMaps: true
		})
		.bundle()
		.pipe(source('ztst.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(path.join('.', 'test', 'dist')))
        .on('end', () => console.log(`[${new Date().toLocaleTimeString()}] -> js non-minified complete...`));

        // also make a minified version.
        return bundle
};   

gulp.task('default', gulp.series(compileTs));