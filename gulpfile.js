// Los packages que vamos a usar
var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	bower = require('gulp-bower'),
	browserSync = require('browser-sync').create();

// Compilar SASS, poner auto-prefijos, minimizar
gulp.task('styles', function() {
	return gulp.src('./src/**/*.scss') // ¿Dónde están los archivos fuentes?
		.pipe(plumber(function(error) { // Así podemos ver errores en el terminal
				gutil.log(gutil.colors.red(error.message));
				this.emit('end');
		}))
		.pipe(sourcemaps.init()) // Start Sourcemaps
		.pipe(sass())
		.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
		}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('.')) // Creates sourcemaps for minified styles
		.pipe(gulp.dest('./dist/css/'))
});
		
// JSHint, concat, and minify JavaScript
gulp.task('app-js', function() {
	return gulp.src([	
		
	// Grab your custom scripts
	
	'./src/service/**/*.js',
	'./rutas.js',
	'./src/component/**/*.js',
				
	])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/js'))
		//.pipe(rename({suffix: '.min'}))
		//.pipe(uglify({mangle: false}))
		//.pipe(sourcemaps.write('.')) // Creates sourcemap for minified JS
		//.pipe(gulp.dest('./dist/js'))
});    

// JSHint, concat, and minify JavaScript
gulp.task('vendor-js', function() {
	return gulp.src([	
		
	// Grab your custom scripts


	'./bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/ngstorage/ngStorage.js',
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/angular-translate/angular-translate.js'



				
	])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(sourcemaps.write('.')) // Creates sourcemap for minified JS
		.pipe(gulp.dest('./dist/js'))
}); 

// Update Foundation with Bower and save to /vendor
gulp.task('bower', function() {
	return bower({ cmd: 'update'})
		.pipe(gulp.dest('./bower_components/'))
});  

// Browser-Sync watch files and inject changes
gulp.task('browsersync', function() {
		// Watch files
		var files = [
			'./app/css/*.css', 
			'./app/js/*.js',
			'**/*.php',
			'app/images/**/*.{png,jpg,gif,svg,webp}',
		];

		browserSync.init(files, {
			// Replace with URL of your local site
			proxy: "http://localhost:2000/",
		});
		
		gulp.watch('./app/scss/**/*.scss', ['styles']);
		gulp.watch('./app/js/scripts/*.js', ['site-js']).on('change', browserSync.reload);

});

// Watch files for changes (without Browser-Sync)
gulp.task('watch', function() {

	// Watch .scss files
	gulp.watch('./src/**/*.scss', ['styles']);

	// Watch site-js files
	gulp.watch('./src/**/*.js', ['app-js']);

	gulp.watch('rutas.js', ['app-js']);

	// Watch vendor-js files
	gulp.watch('./bower_components/**/*.js', ['vendor-js']);

}); 

// Run styles, site-js and bootstrap-js
gulp.task('default', function() {
	gulp.start('styles', 'app-js', 'vendor-js');
});