
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

var truck = {
    name: "truck",
    cargo: "solid",
    location: paris,
    //range: this.location.continent,
    //range: this.location.continent,
    range: function() {
        return this.location.continent;
    },
    kmCost: 10,
    cost: function(dist) {
        return (this.kmCost * dist);
    }
};

var tankTruck = Object.create(truck);
tankTruck.name = "Tank truck";
tankTruck.cargo = "liquid";
tankTruck.location = la;

var plane = Object.create(truck);
plane.name = "Cargo Plane";
plane.airportCost = 100;
plane.cost = function(dist) {
    return ((this.kmCost * dist) + this.airportCost);
};
plane.range = function() {
    return continents;
};

var transporters = [truck, tankTruck, plane];

for (var transporterIndex in transporters) {
    var transporter = transporters[transporterIndex];
    say(transporter.name);
    say(transporter.cargo);
    say(transporter.range());
    say(transporter.cost(100));
    say("---");
}