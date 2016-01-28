var headerRegex = /^\[(.*)\]$/;
var kvRegex = /^(.*)\=(.*)$/;
var commentRegex = /^([^#;]*)[#;].*$/;

// 
// Exports
//

// parseINI parses the given input string as
// INI data, returning the resulting object.
parseINI = function(input) {
   var out = {};
   
   // Split input into lines
   var lines = s.lines(input);

   // Clean the lines
   lines = _.map(lines, cleanLine);

   // Remove empty lines
   lines = _.reject(lines,function(l){
      return l.length < 1;
   });

   // Next pass: split into headered sections
   var currentSection = 'global';
   _.each(lines,function(l) {
      console.log("Parsing line",l);
      if(m = headerRegex.exec(l)) {
         console.log("Found Section",m[1]);
         // We are a section header
         currentSection = m[1];
         return;
      };
      // We are not a header; see if we are a key-val pair
      if ( p = parseKv(l) ) {
         console.log("Found KV",p);
         if(!out[currentSection]) {
            out[currentSection] = {};
         }
         out[currentSection][p.key] = p.val;
         return;
      }
      console.log("Failed to parse line", l)
   });

   return out;
}

//
// Utilities
//

// cleanLine
cleanLine = function(l) {
   l = s.trim(l);

   // Trim comments
   var m = commentRegex.exec(l);
   if(m){
      // This line has a comment, so
      // replace the line with only the
      // part before the comment, trimming
      // whitespace again.
      l = s.trim(m[1]);
   }
   return l;
}

// parseKv
parseKv = function(l) {
   var m = kvRegex.exec(l);
   if(!m) {
      return null;
   }
   var out = {
      key: s.trim(m[1]),
      val: s.trim(m[2])
   };

   // Empty keys are not acceptable
   if(out.key == '') {
      return null;
   }

   return out;
}

