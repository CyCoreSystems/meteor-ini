# ini

This is a simple Npm wrapper for server-side parsing of INI files.  It uses
the [github.com/isaacs/ini](http://github.com/isaacs/ini) tool.

Just call something like:
```js
var config = ini.parse(<myINIData>);
```

This will load the INI data into the object `config`.

For convenience, there is also included a file parser which wraps a file read:
```js
var config = ParseINIFile("/etc/meteor/myconfig.ini");
```

