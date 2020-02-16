var gulp = require('gulp'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    { series } = require('gulp'),
    imagemin = require('gulp-imagemin');


gulp.task('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('deleteDistFolder', function() {
    return del("./dist");
});

gulp.task('copyGeneralFiles', function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/about.html',
        '!./app/contact.html',
        '!./app/stories.html',
        '!./app/products.html',
        '!./app/faq.html',
        '!./app/assets/images/*',
        '!./app/assets/styles/**/*',
        '!./app/assets/scripts/**/*',
        '!./app/temp',
        '!./app/temp/**'
    ]

    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('imagemin', function() {
    return gulp.src(['./app/assets/images/**', '!./app/assets/images/svg/*/**'])
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/assets/images"));
})

gulp.task('usemin', function() {
    return gulp.src(["./app/index.html", "./app/about.html", "./app/contact.html", "./app/stories.html", "./app/products.html", "./app/contact.html", "./app/stories.html", "./app/faq.html"])
        .pipe(usemin({
            css: [
                function() {
                    return rev()
                },
                function() {
                    return cleanCSS()
                }
            ],
            js: [
                function() {
                    return rev()
                },
                function() {
                    return uglify()
                }
            ]
        }))
        .pipe(gulp.dest("./dist"));
});