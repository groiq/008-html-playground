var pubName = "Bruce Wayne";
var secretName;

function tell(pubName, secretName) {
    document.write("<p>");
    document.write("Public name: ");
    document.write(pubName);
    document.write("<br />");
    document.write("Secret identity:");
    document.write(secretName);
    document.write("</p>");
}

function secret() {
    var secretName = "Batman";
    tell(pubName,secretName);
}

secret();
tell(pubName,secretName);

/* Output:
Public name: Bruce Wayne
Secret identity:Batman

Public name: Bruce Wayne
Secret identity:undefined

*/