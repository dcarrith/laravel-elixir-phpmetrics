'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var path = require('path');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('phpmetrics', function(src, options) {
    src = src || [
        'app/**/*.php',
        'bootstrap/*.php',
        'config/*.php',
        'database/**/*.php',
        'public/*.php',
        'resources/**/*.php',
        'test/**/*.php'
    ];

    options = options || {};

    var command = {
            options: {
                reportHtml: 'report-html',
                reportXml: 'report-xml',
                reportCli: 'report-cli',
                violationsXml: 'violations-xml',
                reportCsv: 'report-csv',
                reportJson: 'report-json',
                chartBubbles: 'chart-bubbles',
                level: 'level',
                extensions: 'extensions',
                excludedDirs: 'excluded-dirs',
                symlinks: 'symlinks',
                withoutOOP: 'without-oop',
                failureCondition: 'failure-condition',
                config: 'config',
                templateTitle: 'template-title',
            }
        },
        defaults = {
            bin: 'phpmetrics'
        },
        done = null;

    new Task('phpmetrics', function() {

        var done = null,
            parameters = null,
            options = defaults,
            execute = path.normalize(options.bin);

        // generates parameters
        parameters = Object.keys(options).map(function(option) {
            return option in command.options && options[option] !== undefined ? '--' + command.options[option] + (options[option] !== true ? '=' + options[option]:''): null;
        }).filter(Boolean);

        execute += ' ' + parameters.join(' ') + ' ' + src;

        done = this.async();

        exec(execute, {maxBuffer: options.maxBuffer}, function(error, stdout, stderr) {

            if(typeof options.callback === 'function') {
                options.callback.call(this, error, stdout, stderr, done);
            }

            if (stdout) {

                notify({
                    title: 'Laravel Elixir',
                    message: stdout,
                    icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
                    onLast: true
                });
            }

            if (error) {

                notify.onError({
                    title: 'Laravel Elixir',
                    subtitle: 'PHPMetrics Failed',
                    message: stderr ? stderr : 'Task PhpMetrics: failed.',
                    icon: path.join(__dirname, '../laravel-elixir/icons/fail.png')
                })(error);
            }

            done(error);
        });
    })
    .watch('./app/**');
});
