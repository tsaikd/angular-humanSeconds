angular-humanSeconds [![GitHub version](https://badge.fury.io/gh/tsaikd%2Fangular-humanSeconds.png)](http://badge.fury.io/gh/tsaikd%2Fangular-humanSeconds)
====================
[![Dependency Status](https://david-dm.org/tsaikd/angular-humanSeconds.png)](https://david-dm.org/tsaikd/angular-humanSeconds)
[![devDependency Status](https://david-dm.org/tsaikd/angular-humanSeconds/dev-status.png)](https://david-dm.org/tsaikd/angular-humanSeconds#info=devDependencies)
[![Build Status](https://travis-ci.org/tsaikd/angular-humanSeconds.png)](https://travis-ci.org/tsaikd/angular-humanSeconds)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[angular-translate]: https://github.com/angular-translate/angular-translate

AngularJS filter for converting a number of seconds to a human readable time

support i18N with [angular-translate] package

fork from https://github.com/wildlyinaccurate/angular-readable-time

## Usage

Include `angular-translate.min.js` and `angular-humanSeconds.min.js` in your application.

```html
<script src="angular-translate.min.js"></script>
<script src="angular-humanSeconds.min.js"></script>
```

Add the `pascalprecht.translate` and `humanSeconds` module to your application's dependencies.

```js
angular.module("myApp", ["pascalprecht.translate", "humanSeconds"]);
```

Use the filter by passing it a number of seconds.

```html
<p>{{ 60 | humanSeconds }}</p>
<p>{{ 128000 | humanSeconds }}</p>
```

The above example will look something like this:

> 1 minute
>
> 2 weeks

If use zh-tw locale

> 1 分
>
> 2 週

If you use this module you can give it a thumbs up at http://ngmodules.org/modules/angular-humanSeconds.
