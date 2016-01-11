# laravel-elixir-phpmetrix

## Install

```bash
$ npm install laravel-elixir-phpmetrix --save-dev
```

or during development for the latest version:

```bash
$ npm install dcarrith/laravel-elixir-phpmetrix --save-dev
```

## Usage

### Example Gulpfile

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phplint');
require('laravel-elixir-phpmetrix');

elixir(function(mix) {
    mix.phpmetrix('phpmetrix.yml');
});
```
### Advanced Example

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phplint');
require('laravel-elixir-phpmetrix');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.phplint([
        'app/**/*.php',
        'test/**/*.php'
    ])
    .phpSpec()
    .phpUnit();
    mix.phpmetrix('phpmetrix.yml');
});
```
## Example phpmetrix.yml
```shell
default:
    rules:
        cyclomaticComplexity: [ 10, 6, 2 ]
        maintainabilityIndex: [ 0, 75, 95 ]

    failure: average.maintainabilityIndex < 50 or sum.loc > 10000

    path:
        directory: .
        extensions: php
        exclude: grunt|node_modules|public|storage|vendor

    logging:
        report:
            #cli:    true
            xml:    ./public/reports/phpmetrics.xml
            html:   ./public/reports/phpmetrics.html
            csv:    ./public/reports/phpmetrics.csv
        violations:
            xml:    ./public/reports/violations.xml
        chart:
            bubbles: ./public/reports/bubbles.svg

```

## Credits

Coming soon
