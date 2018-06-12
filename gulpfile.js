//引入平台
var gulp = require('gulp');

//引入插件

var minifyJs = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var babel = require('gulp-babel');

//拷贝html
gulp.task("copyHtml",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("D:/localhost/benlailife/"));
});

//拷贝img文件夹
gulp.task("copyImg",function(){
	return gulp.src("img/*.{jpg,png,gif,webp}")
	.pipe(gulp.dest("D:/localhost/benlailife/img/"));
});

//拷贝icon文件夹
gulp.task("copyIcon",function(){
	return gulp.src("icon/*.{jpg,png,gif,webp}")
	.pipe(gulp.dest("D:/localhost/benlailife/icon/"));
});

//拷贝PHP文件夹
gulp.task("copyPhp",function(){
	return gulp.src("./src/php/*.php")
	.pipe(gulp.dest("D:/localhost/benlailife/src/php"))
})

//编译scss,压缩css
gulp.task('minifyCss',function(){
	return gulp.src('./src/style/*.scss')
	.pipe(sass())
	// .pipe(minifyCss())
	.pipe(gulp.dest('D:/localhost/benlailife/src/css'));
})


//转译js为ES5,压缩js
gulp.task('minifyJs',function(){
	return gulp.src('./src/js/*.js')
	.pipe(babel())
	// .pipe(minifyJs())
	.pipe(gulp.dest('D:/localhost/benlailife/src/js'));
})

//监听所有任务

gulp.task('default',function(){
	
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("img/*.{jpg,png,gif,webp}",["copyImg"]);
	gulp.watch("icon/*.{jpg,png,gif,webp}",["copyIcon"]);
	gulp.watch('./src/php/*.php',["copyPhp"]);
	gulp.watch('./src/js/*.js',["minifyJs"]);
	gulp.watch('./src/style/*.scss',["minifyCss"]);
})