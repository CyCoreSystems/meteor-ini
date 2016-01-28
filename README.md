# ini

This is a crude native INI file parser.  There are two exposed methods:
- parseINIFile() which takes a filename and parses it as an INI
- parseINI() which takes string input and parses it as INI

Both methods return an object (which may be empty) representing
the INI.  The sections are represented by the first index, keys
by the second.  Top entries without a section are considered being
part of the `global` section.

Also, no attempt is made to parse the values into anything but their
native strings.  The only thing done to them is to trim whitespace
from around them.

Hence:
```js
var out = parseINI('
   name=Charles ;; Comment!
   [stats]
   height=108  # I am really a comment, too=foo
   weight=52
');

```

Would return:
```js
out = {
   global: {
      name: 'Charles'
   },
   stats: {
      height: '108',
      weight: '52'
   }
}
```

