'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var path = require('path');
var phpmetrix = require('gulp-phpmetrix').phpmetrix;
var Elixir = require('laravel-elixir');
var Task = Elixir.Task;

Elixir.extend('phpmetrix', function(options) {

    options = options || { args: { conf: 'phpmetrics.yml' }};

    args = options.args || { conf: 'phpmetrics.yml' };

    new Task('phpmetrix', function() {

        return gulp.src(['']).pipe(phpmetrix(options)).on('error', function(e) { throw e })
    })
    .watch('./app/**');
});
