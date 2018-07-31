//a little story about matryoshkas.

document.write("<p>A wooden doll is standing on the table. The sage old man says, 'This is a matryoshka. They sometimes contain little pearls of wisdom.'</p>");

function openMatryoshka(count,total) {
    document.write("I open matryoshka number " + count + ". ");
    if (count < total) {
        document.write("It contains another matryoshka.<br />")
        openMatryoshka((count + 1), total);
    }
    else {
        document.write("It contains a little sheet of paper, like a fortune cookie.<br />Written on the sheet is the text of <em>War and Peace</em>.");
    }
    document.write("<br />I close matryoshka number " + count + ".");
}

document.write("<p>");
openMatryoshka(0,4);
document.write("</p>");

document.write("<p>'So, what do you think?' I am asked.<br />'Well, this is a very layered piece of wisdom.'")