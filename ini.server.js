var fs = Npm.require('fs');

// parseINIFile parses the given INI file and
// returns the resulting object.
parseINIFile = function(fn) {
   return parseINI(fs.readFileSync(fn),'utf-8');
}
