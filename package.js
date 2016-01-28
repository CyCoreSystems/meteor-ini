Package.describe({
  name: 'cycore:ini',
  version: '0.0.2',
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
  api.addFiles('ini.js','server');
  api.export('ini','server');
  api.export('ParseINIFile','server');
});

Npm.depends({
   ini: '1.3.4'
})
