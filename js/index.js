function absatzAusgabe() {
    for (var i = 0; i < arguments.length; i++) {
        document.write(arguments[i] + "<br />");
    }
}

absatzAusgabe("hallo",12345);
absatzAusgabe(3,7.4,"nein", true);