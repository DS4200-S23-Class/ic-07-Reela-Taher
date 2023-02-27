// main.js

// Define the dataset
const data = [55000, 48000, 27000, 66000, 90000];

// Set the dimensions of the SVG element
const width = 400;
const height = 300;
const barPadding = 5;

// Create the SVG element
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a group element for the bars
const bars = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("g");

// Draw the bars
bars.append("rect")
  .attr("x", (d, i) => i * (width / data.length))
  .attr("y", d => height - d)
  .attr("width", width / data.length - barPadding)
  .attr("height", d => d)

// Add a vertical axis with labels
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

const yAxis = d3.axisLeft(yScale);

svg.append("g")
  .attr("transform", "translate(" + barPadding + ", 0)")
  .call(yAxis);
