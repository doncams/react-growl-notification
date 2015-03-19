var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    plugins= require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

gulp.task('browserify', function() {
    var entries = ['./scripts/index.js'];
    //entries = _.union([], glob.sync('./app/components/**/*.js'));

    return browserify({
        entries: entries,
        extensions: ['.js']
    })
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./scripts/'));
});

