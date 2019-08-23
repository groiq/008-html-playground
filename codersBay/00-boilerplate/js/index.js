/* function say(text) {
    document.write(text + "<br />");
}


function list(array) {
    //stringify array
    array = JSON.stringify(array,"---",2);
    //write string to page
    document.write("<pre>");
    document.write(array);
    document.write("</pre>");
    // log to console
    //console.log(array);
    
}

var output = "unchanged boilerplate output";

document.getElementById('outputGoesHere').innerHTML = output;

document.write("hello?");

var team = {
	"teamID" : 1,
	"function" : "Website generation",
	"members" : [
					{
						"id" : 1,
						"name" : "Alice",
						"function" : "database administration"
					},
					{
						"id" : 2,
						"name" : "Bob",
						"function" : "backend development"
					},
					{
						"id" : 3,
						"name" : "Charlie",
						"function" : "frontend development",
					},
					{
						"id" : 4,
						"name" : "Dan",
						"function" : "graphic design"
					}
				]
}

//list(team);

window.onload = function() {
    var result = doSomething();
    document.getElementById("output").innerHTML = result;
    
}



function doSomething() {
    
    var result = "";
    
    result = "set in function";
    
    
    return result;
}
 */