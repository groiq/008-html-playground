var functionList = [
  function(i) { alert(i + "one!"); },
    function(i) { alert(i + "two!"); }
];

var i = 1;
i *= 2;
i *= 3;
say(i);

for (var j in functionList) { functionList[j](i); }