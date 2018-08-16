var possibleStates = [0,1];

var permutations = {
    byTwo: function(i) { return (i*2); },
    byThree: function(i) {return (i*3); },
    byFour: function(i) { return (i*4); }
};


function generateCases(switchArray,possibleStates) {
    
    
    
    var allStates = [];
    var currentStates = [];
    var switchList = Object.keys(switchArray);
    //say(switchList);
    //list(switchList);
    //var switchCount = Object.keys(switchList).length;
    for (var i in switchList) { currentStates.push(possibleStates[0]); }
    //say(currentStates);
    
    function fillValues(currentSwitch) {
        //say(currentSwitch);
        for (var currentState in possibleStates) {
            currentStates[currentSwitch] = possibleStates[currentState];
            //say(currentStates);
            //say(switchList);
            //list(switchList);
            //say(switchList.length);
            //if(currentSwitch < (switchCount-1)) {
            if(currentSwitch < (switchList.length-1)) {
                fillValues(currentSwitch+1);
            } else {
                //say(currentStates);
                var currentStateDict = {};
                for (var i in switchList) {
                    //say(switchList[i]);
                    //say(currentStates[i]);
                    var switchID = switchList[i];
                    //say(switchID);
                    //say(currentStates[i]);
                    currentStateDict[switchID] = currentStates[i];
                    //say(currentStateDict);
                    //list(currentStateDict);
                }
                //list(currentStateDict);
                allStates.push(currentStateDict);
            }
        }
    }
    
    fillValues(0);
    //list(allStates);
    //for (var i in allStates) { say(allStates[i]); }
    //document.write(JSON.stringify(allStates,undefined,2));
    console.log(JSON.stringify(allStates,"---",2));
    return allStates;
    

}

var allCases = generateCases(permutations,possibleStates);

function performPermutations(data, permutationFlags) {
    var result = "";
    for (var permutation in permutationFlags) {
        if (permutationFlags[permutation]) {
            result += permutation;
            result += ": ";
            data = permutations[permutation](data);
        }
    }
    result += data; 
    return result;
}

var testData = 1;

for (var testCase in allCases) {
    say(performPermutations(testData,allCases[testCase]));
}

//say(performPermutations(testData,permutationFlags));