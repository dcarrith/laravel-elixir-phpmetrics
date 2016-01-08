# laravel-elixir-phpmetrics

## Install

```bash
$ npm install laravel-elixir-phpmetrics --save-dev
```

or during development for the latest version:

```bash
$ npm install dcarrith/laravel-elixir-phpmetrics --save-dev
```

## Usage

### Example Gulpfile

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phpmetrics');

elixir(function(mix) {
  mix.phpmetrics();
}
```
### Advanced Example

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phpmetrics');

elixir(function(mix) {
  mix.phpmetrics([
    'app/**/*.php',
    'test/**/*.php'
  ]);
}
```

## Credits

Coming soon
