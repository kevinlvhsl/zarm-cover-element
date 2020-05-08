'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-copy');
var autoprefixer = require('gulp-autoprefixer');

var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/elementui.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(concatCss('css/index.css'))
    .pipe(gulp.dest('dist'))
    .pipe(concatCss('css/index.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

//删除生成的
gulp.task('clean', () => {
    del(['dist']);
});
gulp.task('copy', () => {
  gulp.src('./src/theme/fonts/*')
  .pipe(copy('./dist', { prefix: 1 }))
  // .pipe(gulp.dest('./dist/fonts'))
});
// //Gulp plugin
// var gulp = require("gulp"),
//   util = require("gulp-util"),
//   //gulp打包日志或者警告。其实可以不用的
//   concat = require('gulp-concat'),
//   //将多个文件合并成一个文件
//   uglifycss = require('gulp-uglifycss'),
//   //css代码压缩
//   sass = require("gulp-sass"),
//   //sass 转 css
//   autoprefixer = require('gulp-autoprefixer'),
//   //浏览器兼容性自动补齐前缀
//   minifycss = require('gulp-minify-css'),
//   // css代码压缩--已经废弃
//   // cssmin = require('gulp-clean-css'),
//   // css代码压缩 -- 配合 gulp-make-css-url-version完成url后面添加MD5版本很高避免缓存
//   // cssver = require('gulp-make-css-url-version');
//   //添加版本号  与 gulp-clean-css 配合使用
//   rename = require('gulp-rename'),
//   //重新命名文件或者文件夹
//   del = require('del'),
//   //删除文件或者文件夹
//   log = util.log;


// // 样式文件打包成 一个sgm-ng-comm.min.css?v=HJi9y08JBKGH392IHKJFH98UHO9DFDSO
// var sassFiles = "./style/abc.scss";
// console.log('入口文件', sassFiles)
// gulp.task("sass", () => {
//     return  gulp.src(sassFiles)
//         .pipe(sass({ style: 'expanded' }))
//         .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
//         // .pipe(concat('sgm-ng-common.css'))
//         .pipe(gulp.dest("./dist/css"))
//         // .pipe(rename('sgm-ng-common.min.css'))
//         // .pipe(cssver())
//         // .pipe(cssmin())
//         .pipe(gulp.dest('./dist/css/min'));
// });

// // gulp.task("watch", () =>　{
// // //   log("Watching scss files for modifications");
// //   gulp.watch(sassFiles, ["sass"]);
// // });

// //删除生成的
// // gulp.task('clean', () => {
// //     del(['dist']);
// // });

gulp.task("default", ['clean', 'sass', 'copy']);
