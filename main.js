
    const height = 500;
    const width = 500;
    const margin = {left: 50, right: 50, top: 50, bottom: 50}

    const svg = d3.select("#vis1")
                    .append("svg")
                    .attr("height", height)
                    .attr("width", width)
                    .attr("class", "frame");

    // given data
    const data = [55000, 48000, 27000, 66000, 90000];

    // y-axis scale
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);


    // appends points to svg
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", d => yScale(d))
      .attr("r", 5)
      .attr("fill", "black");

    // y-axis
    const y_axis = d3.axisLeft(yScale);
    svg.append("g")
      .attr("class", "y axis")
      .call(y_axis);