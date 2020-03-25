const gulp = require('gulp'),
  pugtohtml = require('gulp-pug'),
  minifyhtml = require('gulp-htmlmin'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-clean-css'),
  bundlecss = require('gulp-concat-css'),
  autoprefixcss = require('gulp-autoprefixer'),
  minifyimages = require('gulp-imagemin'),
  renamefile = require('gulp-rename'),
  errordonotmatter = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  changed = require('gulp-changed'),
  browsersync = require('browser-sync').create();

const pugSRC = 'src/*.pug',
  pugDEST = 'src/pug/',
  htmlSRC = './*.html',
  htmlDEST = 'build/pages/',
  sassSRC = 'src/sass/**/*.scss',
  sassDEST = 'src/sass/css/',
  cssSRC = 'src/css/*.compiled.css',
  cssDEST = 'build/css',
  imagesSRC = 'src/img/*',
  imagesDEST = 'build/images';

gulp.task('message', async function() {
  console.log('gulp is running');
});

gulp.task('pugToHtml', async function() {
  gulp
    .src(pugSRC)
    .pipe(pugtohtml())
    .pipe(renamefile('index.html'))
    .pipe(gulp.dest(pugDEST));
});

gulp.task('minifyHtml', async function() {
  gulp
    .src(htmlSRC)
    .pipe(changed(htmlSRC))
    .pipe(errordonotmatter())
    .pipe(minifyhtml())
    .pipe(renamefile('index.min.html'))
    .pipe(gulp.dest(htmlDEST));
});

gulp.task('sass', async function() {
  gulp
    .src(sassSRC)
    .pipe(changed(sassSRC))
    .pipe(errordonotmatter())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(renamefile('main.compiled.css'))
    .pipe(autoprefixcss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassDEST))
    .pipe(browsersync.stream());
});

gulp.task(
  'serve',
  gulp.series('sass', function() {
    browsersync.init({ server: './', port: 80 });

    gulp.watch('src/pug/*.pug', gulp.series('pugToHtml'));
    gulp.watch('src/img/*', gulp.series('minifyImages'));
    gulp.watch('./*.html', gulp.series('minifyHtml'));
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('src/sass/css/*.compiled.css', gulp.series('minifyCss'));
  })
);

gulp.task('minifyCss', async function() {
  gulp
    .src(cssSRC)
    .pipe(changed(cssSRC))
    .pipe(errordonotmatter())
    .pipe(bundlecss(cssSRC))
    .pipe(minifycss())
    .pipe(renamefile('main.min.css'))
    .pipe(gulp.dest(cssDEST));
});

gulp.task('minifyImages', async function() {
  gulp
    .src(imagesSRC)
    .pipe(changed(imagesSRC))
    .pipe(errordonotmatter())
    .pipe(minifyimages())
    .pipe(gulp.dest(imagesDEST));
});

gulp.task(
  'default',
  gulp.series(
    'message',
    'minifyHtml',
    'pugToHtml',
    'sass',
    'minifyCss',
    'minifyImages',
    'serve'
  )
);
