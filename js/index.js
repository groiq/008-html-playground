var chlegg = {
    name: "chlegg",
    race: "asura",
    profession: "mesmer",
    title: "psychotect"
};

for (var field in chlegg) {
    document.write(field + ": " + chlegg[field] +  "<br />");
}