# grunt-dist

> Moves files from build dir to dist dir

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin by adding this to your package.json

```json
devDependencies: {
  "grunt-dist": "git://github.com/Agent-H/grunt-dist.git"
  ...
}
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dist');
```

## The "dist" task

### Overview
In your project's Gruntfile, add a section named `dist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dist: {
    your_target: {
      input: 'your/build-or-src/directory',
      output: 'your/dist/directory',
      dist: [
        'a/file/to/copy/as.is',
        'a/folder',
        {src: 'source/of/a/file', dst: 'destination/of/that/file'},
        {src: 'source/of/a/folder', dst: 'destination/of/that/folder'}
      ]
    }
  }
})
```

### Usage Examples

Say you have a frontend based on requirejs, your sources are in /src. You build using r.js into /build. But r.js may have kindly copied everything from src/ into build/ even though you only need build/app.js.
Then use dist as follows:

```js
grunt.initConfig({
  dist: {
    your_target: {
      input: 'your/build-or-src/directory',
      output: 'your/dist/directory',
      dist: [
        'a/file/to/copy/as.is',
        'a/folder',
        {src: 'source/of/a/file', dst: 'destination/of/that/file'},
        {src: 'source/of/a/folder', dst: 'destination/of/that/folder'}
      ]
    }
  }
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
