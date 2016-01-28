// INI file parsing

Tinytest.add('parseINIFile', function(test) {
   var out = parseINI(Assets.getText("test.ini"));
   console.log("Out:",out);

   test.equal(out.global.name,'Globus Maximus');
   test.equal(out.partA.type,'goose');
   test.equal(out.partA['egg count'],'45');
});

