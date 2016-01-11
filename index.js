'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var path = require('path');
var Elixir = require('laravel-elixir');
var phpmetrix = require('phpmetrix').phpmetrix;

var Task = Elixir.Task;

Elixir.extend('phpmetrix', function(config, options) {
    config = config || ['phpmetrix.yml'];

    options = options || {};

    new Task('phpmetrix', function() {
        return gulp.src(["phpmetrics.yml"]).pipe(phpmetrix({args: ['phpmetrics.yml']})).on('error', function(e) { throw e })
    })
    .watch('./app/**');
});
