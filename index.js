'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var path = require('path');
var phpmetrix = require('gulp-phpmetrix').phpmetrix;
var Elixir = require('laravel-elixir');
var Task = Elixir.Task;

Elixir.extend('phpmetrix', function(conf, options) {

    conf = conf || 'phpmetrix.yml';

    options = options || {};

    new Task('phpmetrix', function() {

        return gulp.src(['']).pipe(phpmetrix(conf)).on('error', function(e) { throw e })
    })
    .watch('./app/**');
});
