ini = Npm.require('ini')

// ParseINIFile parses the given INI file and
// returns the resulting object.
ParseINIFile = function(fn) {
   return ini.parse(fs.readFileSync(fn));
}
