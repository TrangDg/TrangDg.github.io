// Script by d3noob from https://bl.ocks.org/d3noob/d316a488cae262ae24e6ca897b209f9e
// load data in different tabs from http://bl.ocks.org/widged/4561185

!(function (d3) {
$("#containerList").empty();

const zoom = d3.zoom()
      .scaleExtent([1/4, 10])
      .on('zoom', function () {
        g.attr('transform', d3.event.transform)
      });

// set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
  width = 2500,
  height = 800;

// append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
var svg = d3.select("#containerList").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .call(zoom);

var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// declares a tree layout and assigns the size
var treemap = d3.tree()
  .size([height, width]);

// load the external data
d3.json("containerData.json", function(error, treeData) {
  if (error) throw error;

  //  assigns the data to a hierarchy using parent-child relationships
  var nodes = d3.hierarchy(treeData, function(d) {
    return d.children;
    });

  // maps the node data to the tree layout
  nodes = treemap(nodes);

  // adds the links between the nodes
  var link = g.selectAll(".link")
    .data( nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
       return "M" + d.y + "," + d.x
       + "C" + (d.y + d.parent.y) / 2 + "," + d.x
       + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
       + " " + d.parent.y + "," + d.parent.x;
       });

  // adds each node as a group
  var node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
      (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.y + "," + d.x + ")"; });

  // adds the circle to the node
  node.append("circle")
    .attr("r", 5)
    .attr("class", function(d) { return d.data.color; });

  // adds the text to the node
  node.append("text")
    .attr("dy", ".35em")
    .attr("x", function(d) { return d.children ? -13 : 13; })
    .style("text-anchor", function(d) { 
    return d.children ? "end" : "start"; })
    .text(function(d) { return d.data.name; });

});

})(d3);