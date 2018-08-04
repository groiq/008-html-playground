
function say(text) {
    document.write(text);
    document.write("<br />");
}

var continents = ["europe","america"];

function city(continent) {
    this.continent = continent;
}

var paris = new city(continents[0]);
var athens = new city(continents[0]);
var la = new city(continents[1]);

/*say(paris.continent);
say(athens.continent);
say(la.continent);*/

var truck = {
    cargo: "solid",
    location: paris,
    range: this.location.continent,
    kmCost: 10,
    cost: function(dist) {
        return (this.kmCost * dist);
    }
};
say(truck.location.continent);
say(truck.range);

var tankTruck = Object.create(truck);
tankTruck.cargo = "liquid";
tankTruck.location = la;

var plane = Object.create(truck);
plane.airportCost = 100;
plane.cost = function(dist) {
    return ((this.kmCost * dist) + this.airportCost);
};
plane.range = continents;

var transporters = [truck, tankTruck, plane];

for (var transporterIndex in transporters) {
    transporter = transporters[transporterIndex];
    say(transporter);
    say(transporter.cargo);
    say(transporter.location);
    say(transporter.range);
    say(transporter.cost);
    say(transporter[cargo]);
    say(transporter[range]);
    //say(transporter.cost(100));
    say(transporter[cost]);
}