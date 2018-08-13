var x = new Array();
x[0] = 1;
x["name"] = "meier";


say(x[0]);
say(x["0"]);
say(x[name]);
say(x["name"]);

/* output:
1
1
undefined
meier

*/