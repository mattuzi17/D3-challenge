// define SVG dimensions
var svgWidth = 960; 
var svgHeight = 910; 

// define margins as an object
var chartMargin = {
  top: 20,
  right: 40, 
  bottom: 60,
  left: 100
};

//define dimensions of chart area
var width = svgWidth - chartMargin.left - chartMargin.right;
var height = svgHeight - chartMargin.top - chartMargin.bottom;

// select body, append SVG area to it, and set the dimensions

var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

  var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

 //load data 
  d3.csv("assets/data/data.csv").then(function(data){
    console.log(data);

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    // Scale the range of the data
    x.domain(d3.extent(data, function (d) {
         return d.age;
    }));
    y.domain([0, d3.max(data, function (d) {
         return d.smokes;
    })]);

    var scatterPlot = d3.line()
     .x(function (d) {
          return x(d.age);
     })
     .y(function (d) {
          return y(d.smokes);
     });
     // define SVG dimensions
var svgWidth = 960; 
var svgHeight = 910; 

// define margins as an object
var chartMargin = {
  top: 20,
  right: 40, 
  bottom: 60,
  left: 100
};

//define dimensions of chart area
var width = svgWidth - chartMargin.left - chartMargin.right;
var height = svgHeight - chartMargin.top - chartMargin.bottom;

// select body, append SVG area to it, and set the dimensions

var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

  var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);
     //var svg = d3.select("#scatter").append("svg")
     //.attr("width", width + margin.left + margin.right)
     //.attr("height", height + margin.top + margin.bottom)
     //.append("g")
     //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  })


