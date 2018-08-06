function say(text) {
            document.write(text + "<br />");
        }
        
      var sweden = {
          name: "Sweden",
          continent: "Europe"
      };

var cont = function(country) {
    return country.continent;
};
      
      var stockholm = {
          name: "Stockholm",
          country: sweden,
          //continent: this.country.continent
         
          continent: cont(this.country),
      };
      
      say(sweden.name);
        say(sweden.continent);
        
        say(stockholm.name);
        say(stockholm.country);
        say(stockholm.country.name);
        say(stockholm.country.continent);
        //say(stockholm.continent);
say(stockholm.continent);
say(stockholm.continent());

    