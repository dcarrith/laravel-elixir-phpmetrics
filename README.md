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

## Credits

Coming soon
