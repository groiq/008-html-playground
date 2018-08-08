

function die(eyes) {
    this.eyes = eyes;
    this.roll = function() {
        var rawRandom = Math.random() * eyes;
        var result = Math.floor(rawRandom) + 1;
        return result;
        //return this.eyes;
    }
    this.statistic = function(tries) {
        var stats = {};
        for (var i=0;i<eyes;i++) {
            stats[(i+1)] = ":";
        };
        for(var i=0; i < tries; i++) {
            //say("what?");
            var cast = this.roll();
            //say(cast);
            stats[cast] += "x";
        }
        for (var j in stats) { say(j + ": " + stats[j]); }
    };
}

var tries = 500;

say("1d6:");
var d6 = new die(6);
d6.statistic(tries);

/*say("1d20:");
var d20 = new die(20);
 d20.statistic(tries);*/

/*
Todo: Implement 2dx. The difficulty being that the range of 2d6 aren't 1-12, but 2-12.
And there's a higher chance of rolling 6 that 1.
A, just do those things with two instances.

Rewrite the statistics function so it returns the array rather than printing ist...
*/