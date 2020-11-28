//from data.js
var tableData = data;
var tbody = d3.select("tbody");
var dateform = d3.select("#dateform");
var button = d3.select("#filter-btn");
var regexdate = "[1-31]+\/[1-12]{2}\/20[0-9]{2}";

dateform.on("submit", showtable)
button.on("click", showtable);

function showtable(){
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputbox = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputbox.property("value");

    //check if date entered is valid
    if (inputValue.match(regexdate) == null){
        alert("Invalid date entry: please try the format (d/mm/yyyy).");
    }
    // clear the old table content to make room for the new searched content
    var oldrows = document.getElementById("tbod");   
    while(oldrows.hasChildNodes())
    {
        oldrows.removeChild(oldrows.firstChild);
    }
// append data content matching the date entered
    tableData.forEach((ufo) => {
        var row = tbody.append("tr");
        if (ufo.datetime == inputValue){
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
});
console.log(inputValue.match(regexdate))
//check if any tr exist 


}

// default view of the table
tableData.forEach(function(ufo) {
//console.log(ufo.datetime);
});
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
});