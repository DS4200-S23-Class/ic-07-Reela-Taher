// script.js

const data = [55000, 48000, 27000, 66000, 90000];

const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom);

const g = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

const y = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height, 0]);

const yAxis = d3.axisLeft(y);

g.append('g')
  .attr('class', 'axis')
  .call(yAxis);

g.selectAll('rect')
  .data(data)
  .enter().append('rect')
    .attr('x', (d, i) => i * (width / data.length))
    .attr('y', d => y(d))
    .attr('width', width / data.length - 1)
    .attr('height', d => height - y(d));
