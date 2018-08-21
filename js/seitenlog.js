document.write("hello");

var pageTable = document.getElementById("pageTable");
// document.write(pageTable);

// with(document.getElementById("pages")) {
    // border = "1";
// }

pageTable.border = "1";

for (var page=106;page<167;page++) {
    // pageTable.border = "1";
    
    var pgNum = document.createElement("td");
    pgNum.innerHTML = page;
    var netNum = document.createElement("td");
    netNum.innerHTML = page - 106;
    var percent = document.createElement("td");
    // var percentage = (netNum / 60) * 100;
    // alert(percentage + "," + typeof percentage);
    percent.innerHTML = (netNum.innerHTML / 60) * 100;
    
    
    var tr = document.createElement("tr");
    tr.appendChild(pgNum);
    tr.appendChild(netNum);
    tr.appendChild(percent);
    pageTable.appendChild(tr);
    // pageTable.write(page);
    
}