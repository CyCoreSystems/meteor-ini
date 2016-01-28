Package.describe({
  name: 'cycore:ini',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'INI file parser',
  // URL to the Git repository containing the source code for this package.
  git: 'git://github.com/CyCoreSystems/cycore:ini.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('underscore');
  api.use('underscorestring:underscore.string@3.2.3');
  api.addFiles('ini.js');
  api.addFiles('ini.server.js','server');
  api.export('parseINI');
  api.export('parseINIFile','server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('underscore');
  api.use('underscorestring:underscore.string@3.2.3');
  api.addFiles('ini-tests.js');
  api.addFiles('server-tests.js','server');
  api.addFiles('ini.server.js','server');
  api.addAssets('test.ini',['client', 'server']);
  api.addFiles('ini.js');
});
