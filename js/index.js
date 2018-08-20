var switchList = ["elf","dwarf"];
var possibleStates = ["rogue","mage"];
//var possibleStates = ["on","off"];

var allStates = [];
var currentStates = [];
for (var i in switchList) { currentStates.push(possibleStates[0]); }

function fillValues(currentSwitch) {
    for (var currentState in possibleStates) {
        currentStates[currentSwitch] = possibleStates[currentState];
        //say(currentStates);
        if (currentSwitch < (switchList.length - 1)) {
            fillValues(currentSwitch + 1);
        } else {
            //say(currentStates);
            var currentStateDict = {};
            for (var i in switchList) {
                //say(i);
                //say(currentStates[i]);
                var curSwitch = switchList[i];
                //say(curSwitch);
                currentStateDict[curSwitch] = currentStates[i];
                //var switch = switchList[i];
                //currentStateDict[switch] = currentStates[i];
                
            }
            //list(currentStateDict);
            allStates.push(currentStateDict);
        }
    }
}

fillValues(0);
list(allStates);