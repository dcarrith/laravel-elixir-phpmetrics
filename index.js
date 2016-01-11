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

        var done = null,
            config = config,
            options = options;

        phpmetrix(config, options, function(err) {
            if (err) {
                onError(err);
            } else {
                notify({
                    title: 'Laravel Elixir',
                    message: 'PHPMetrics analysis complete!',
                    icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
                    onLast: true
                });
            }
        });
    })
    .watch('./app/**');
});
