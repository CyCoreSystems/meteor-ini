// KV parsing

Tinytest.add('kv: simple', function(test) {
   var kv;

   kv = parseKv("book=worm");
   test.isNotNull(kv,'matches the key-value pattern');
   test.equal(kv.key,'book', 'Key is "book"');
   test.equal(kv.val,'worm', 'Value is "worm"');

   kv = parseKv("       book  = worm   ");
   test.isNotNull(kv,'matches the key-value pattern');
   test.equal(kv.key,'book', 'Key is "book"');
   test.equal(kv.val,'worm', 'Value is "worm"');

   kv = parseKv("book  =      ");
   test.isNotNull(kv,'key without value is allowed');
   test.equal(kv.key,'book', 'Key is "book"');
   test.equal(kv.val,'', 'Value should be empty');
});

Tinytest.add('kv: invalid', function(test) {
   var kv;
   
   kv = parseKv("bookworm");
   test.isNull(kv,'bookwork should fail to parse');

   kv = parseKv("=bookworm");
   test.isNull(kv,'value without key is not allowed');

});

// Line cleaning
Tinytest.add('lineclean', function(test) {
   var l;

   l = cleanLine("apple   ");
   test.equal(l,'apple','Trim trailing whitespace');

   l = cleanLine("apple  pear  ");
   test.equal(l,'apple  pear','Do not trim inner whitespace');

   l = cleanLine(" apple # banana");
   test.equal(l,'apple', 'Trim comments');

   l = cleanLine(" apple # banana; this is # a banana#### ;;;;  ");
   test.equal(l,'apple', 'Handle multiple comment characters');

   l = cleanLine("; apple # banana; this is # a banana#### ;;;;  ");
   test.equal(l,'', 'Handle lines which begin with comments');

   l = cleanLine("  # apple ");
   test.equal(l,'', 'Handle lines which begin with space _and_ comments');
});

