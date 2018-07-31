function doSomething(i) {
    var result = "";
    var a = 2;
    var b = 3;
    var c = 0;
    switch (i) {
        case 0: c = a + b++; break;
        case 1: c = a + (++b); break;
        case 2: c = a + b--; break;
        case 3: c = a + (--b); break;
        default: c = "invalid"; break;
    }
    result = a + " und " + b + " und " + c + "<br />";
    //result = result + "<br />";
    return result;
}

for (var i = 0; i<5; i++) {
    //i++;
    document.write(doSomething(i));
}