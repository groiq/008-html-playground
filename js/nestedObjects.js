function say(text) {
            document.write(text + "<br />");
        }
        
function country(name,continent) {
    this.name = name;
    this.continent = continent;
}

function city(name,country) {
    this.name = name;
    this.country = country;
    this.continent = this.country.continent;
}

var sweden = new country("Sweden","Europe");
var stockholm = new city("Stockholm",sweden);

say(sweden.name);
say(sweden.continent);
say(stockholm.name);
say(stockholm.country.name);
say(stockholm.continent);