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

require('laravel-elixir-phpmetrix');

elixir(function(mix) {
  mix.phpmetrix();
}
```
### Advanced Example

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-phpmetrix');

elixir(function(mix) {
  mix.phpmetrix(['config.yml']);
}
```

## Credits

Coming soon
