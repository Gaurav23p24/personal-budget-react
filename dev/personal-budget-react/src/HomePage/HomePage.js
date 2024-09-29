// import React from 'react';
// import axios from 'axios';
// import Chart from "chart.js/auto";
// import * as d3 from 'd3';



// function HomePage() {

//   var dataSource = {
//     datasets: [
//         {
//             data: [],
//             backgroundColor: [
//                 '#ffcd56',
//                 '#ff6384',
//                 '#36a2eb',
//                 '#fd6b19',
//                 '#00FF00',
//                 '#800080',
//                 '#FFC0CB',
//                 '#87CEEB',
//                 '#90EE90'
//             ]
//         }
//     ],
//     labels: []
// };

// function createChart() {
// var ctx = document.getElementById('myChart').getContext('2d');
// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: dataSource
// });
// }

// function getBudget() {
// axios.get('http://localhost:3000/budget')
// .then(function (res) {
//     for (var i = 0; i < res.data.myBudget.length; i++) {
//         dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
//         dataSource.labels[i] = res.data.myBudget[i].title;
//         createChart();
//     }
// });
// }

// getBudget();



// var svg = d3.select("#d3-chart")
// .append("svg")
// .append("g");

// svg.append("g")
// .attr("class", "slices");
// svg.append("g")
// .attr("class", "labels");
// svg.append("g")
// .attr("class", "lines");

// var width = 380,
// height = 270,
// radius = Math.min(width, height) / 2;

// var pie = d3.layout.pie()
// .sort(null)
// .value(function (d) {
//   return d.budget;
// });

// var arc = d3.svg.arc()
// .outerRadius(radius * 0.8)
// .innerRadius(radius * 0.4);

// var outerArc = d3.svg.arc()
// .innerRadius(radius * 0.9)
// .outerRadius(radius * 0.9);

// svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// var key = function (d) { return d.data.title; };

// var color = d3.scale.ordinal()
// .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

// // Fetch data from the server using Axios
// axios.get('http://localhost:3000/budget')
// .then(function (res) {
//   var data = res.data.myBudget;
//   updateChart(data);
// })
// .catch(function (error) {
//   console.error("Error fetching data:", error);
// });

// function updateChart(data) {
// /* ------- PIE SLICES ------- */
// var slice = svg.select(".slices").selectAll("path.slice")
//   .data(pie(data), key);

// slice.enter()
//   .insert("path")
//   .style("fill", function (d) { return color(d.data.title); })
//   .attr("class", "slice");

// slice
//   .transition().duration(1000)
//   .attrTween("d", function (d) {
//     this._current = this._current || d;
//     var interpolate = d3.interpolate(this._current, d);
//     this._current = interpolate(0);
//     return function (t) {
//       return arc(interpolate(t));
//     };
//   });

// slice.exit()
//   .remove();

// /* ------- TEXT LABELS ------- */
// var text = svg.select(".labels").selectAll("text")
//   .data(pie(data), key);

// text.enter()
//   .append("text")
//   .attr("dy", ".35em")
//   .text(function (d) {
//     return d.data.title;
//   });

// function midAngle(d) {
//   return d.startAngle + (d.endAngle - d.startAngle) / 2;
// }

// text.transition().duration(1000)
//   .attrTween("transform", function (d) {
//     this._current = this._current || d;
//     var interpolate = d3.interpolate(this._current, d);
//     this._current = interpolate(0);
//     return function (t) {
//       var d2 = interpolate(t);
//       var pos = outerArc.centroid(d2);
//       pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
//       return "translate(" + pos + ")";
//     };
//   })
//   .styleTween("text-anchor", function (d) {
//     this._current = this._current || d;
//     var interpolate = d3.interpolate(this._current, d);
//     this._current = interpolate(0);
//     return function (t) {
//       var d2 = interpolate(t);
//       return midAngle(d2) < Math.PI ? "start" : "end";
//     };
//   });

// text.exit()
//   .remove();

// /* ------- SLICE TO TEXT POLYLINES ------- */
// var polyline = svg.select(".lines").selectAll("polyline")
//   .data(pie(data), key);

// polyline.enter()
//   .append("polyline");

// polyline.transition().duration(1000)
//   .attrTween("points", function (d) {
//     this._current = this._current || d;
//     var interpolate = d3.interpolate(this._current, d);
//     this._current = interpolate(0);
//     return function (t) {
//       var d2 = interpolate(t);
//       var pos = outerArc.centroid(d2);
//       pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
//       return [arc.centroid(d2), outerArc.centroid(d2), pos];
//     };
//   });

// polyline.exit()
//   .remove();
// }


//   return (
//     <main className="center" id="main">

//         <div className="page-area">

//             <article>
//                 <h1>Stay on track</h1>
//                 <p>
//                     Do you know where you are spending your money? If you really stop to track it down,
//                     you would get surprised! Proper budget management depends on real data... and this
//                     app will help you with that!
//                 </p>
//             </article>
    
//             <article>
//                 <h1>Alerts</h1>
//                 <p>
//                     What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
//                 </p>
//             </article>
    
//             <article>
//                 <h1>Results</h1>
//                 <p>
//                     People who stick to a financial plan, budgeting every expense, get out of debt faster!
//                     Also, they live happier lives... since they spend without guilt or fear... 
//                     because they know it is all good and accounted for.
//                 </p>
//             </article>
    
//             <article>
//                 <h1>Free</h1>
//                 <p>
//                     This app is free!!! And you are the only one holding your data!
//                 </p>
//             </article>
//              <div id="chart-Container">
//                 <article aria-labelledby="chartLabel">
//                     <h1 id="chartLabel">Chart</h1>
//                     <p>
//                         <canvas id="myChart" width="400" height="400" role="img" aria-label="Spending distribution pie chart"></canvas>
//                     </p>
//                 </article>
//                 <article aria-labelledby="chartLabel">
//                     <h1 id="chartLabel">D3JS Chart</h1>
//                     <p>
//                         <svg id="d3-chart" width="400" height="400" ></svg>
//                     </p>
//                 </article>
//              </div>
            

//         </div>

//     </main>
//   );
// }

// export default HomePage;






import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import * as d3 from 'd3';

function HomePage() {
  const chartRef = useRef(null); // Reference for the Chart.js canvas
  const d3ChartRef = useRef(null); // Reference for the D3.js SVG

  // Data source for Chart.js
  const dataSource = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#00FF00',
          '#800080',
          '#FFC0CB',
          '#87CEEB',
          '#90EE90'
        ]
      }
    ],
    labels: []
  };

  // Function to create a Chart.js pie chart
  function createChart() {
    const ctx = chartRef.current.getContext("2d");
    if (window.myPieChart) {
      window.myPieChart.destroy();
    }
    window.myPieChart = new Chart(ctx, {
      type: "pie",
      data: dataSource,
    });
  }

  // Function to fetch budget data and populate the charts
  function getBudget() {
    axios.get('/budget.json')
      .then(res => {
        const budgetData = res.data.myBudget;
        for (let i = 0; i < budgetData.length; i++) {
          dataSource.datasets[0].data[i] = budgetData[i].budget;
          dataSource.labels[i] = budgetData[i].title;
        }
        createChart(); // Create the Chart.js chart after data is loaded
        updateD3Chart(budgetData); // Update the D3.js chart with new data
      })
      .catch(err => {
        console.error('Error fetching budget data:', err);
      });
  }

  // Function to create and update D3.js chart
  function updateD3Chart(data) {
    const svg = d3.select(d3ChartRef.current)
      .attr("width", 380)
      .attr("height", 270)
      .append("g")
      .attr("transform", `translate(${380 / 2},${270 / 2})`);
  
    const radius = Math.min(380, 270) / 2;
    const pie = d3.pie().value(d => d.budget);
    const arc = d3.arc().outerRadius(radius * 0.8).innerRadius(0);
    const outerArc = d3.arc().outerRadius(radius * 0.9).innerRadius(radius * 0.9);
    const color = d3.scaleOrdinal(d3.schemeCategory10);
  
    // Draw the pie slices
    const path = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.title));
  
    // Add text labels
    const text = svg.selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('dy', '.35em')
      .text(d => `${d.data.title} (${d.data.budget})`)
      .attr('transform', function(d) {
        const pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1); // Align text left/right
        return `translate(${pos})`;
      })
      .style('text-anchor', function(d) {
        return midAngle(d) < Math.PI ? 'start' : 'end';
      });
  
    // Add polylines connecting slices to labels
    const polyline = svg.selectAll('polyline')
      .data(pie(data))
      .enter()
      .append('polyline')
      .attr('points', function(d) {
        const pos = outerArc.centroid(d);
        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      })
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '1px');
  
    // Helper function to calculate mid-angle of each slice
    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
  }
  

  useEffect(() => {
    getBudget(); // Fetch data and initialize charts on component mount
  }, []);

  return (
    <main className="center" id="main">
      <div className="page-area">
        <article>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? Proper budget management depends on real data... and this app will help you with that!
          </p>
        </article>
        <article>
          <h1>Chart</h1>
          <canvas id="myChart" ref={chartRef} width="400" height="400"></canvas>
        </article>
        <article>
          <h1>D3JS Chart</h1>
          <svg ref={d3ChartRef}></svg>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
