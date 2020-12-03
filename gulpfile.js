var { series, src, dest, watch } = require('gulp');
var preprocess = require('gulp-preprocess');
var browserSync = require("browser-sync").create();
var pug = require('gulp-pug');
var del = require('del');
var less = require('gulp-less');

function html() {
    return src('./src/*.pug')
        .pipe(preprocess({ context: { curtime: Date.now() } }))
        .pipe(pug())
        .pipe(dest('./dist/'))
}

function scripts() {
    return src(['./src/**/*.js'])
        .pipe(preprocess())
        .pipe(dest('./dist/'))
}

function css() {
    return src('./src/**/*.css')
        .pipe(preprocess({ context: { NODE_ENV: 'production', DEBUG: true } }))
        .pipe(dest('./dist/'))
}

function styleLess() {
    return src('./src/**/*.less')
        .pipe(less())
        .pipe(dest('./dist/'));
}

function staticFiles() {
    return src('./static/**/*.*')
        .pipe(dest('./dist/'))
}

function vendor() {
    return src('./vendor/**/*.*')
        .pipe(dest('./dist/'))
}

function serve() {
    return browserSync.init({
        server: {
            baseDir: './dist',
            serveStaticOptions: {
                extensions: ['html'] // pretty urls
            }
        },
    });
}

function reload() {
    return setTimeout(function() {
        browserSync.reload();
    }, 300)
}

function watchFiles(done) {
    series(scripts, css, less, html, staticFiles, vendor)
    watch('./src/**/*.js', scripts);
    watch('./src/**/*.less', styleLess);
    watch('./src/**/*.css', css);
    watch('./src/**/*.pug', html);
    watch('./static/**/*.*', staticFiles);
    watch('./vendor/**/*.*', vendor);
    watch('./dist/**/*.*', reload);
    done();
}


function clean() {
    return del(['dist/*'], { dot: true })
}

exports.dev = series(watchFiles, serve)
exports.clean = series(del)
exports.build = series(clean, scripts, css, styleLess, html, staticFiles, vendor)