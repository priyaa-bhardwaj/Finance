import React, { useState } from "react";
import { Slider, Button } from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "./Stocks.css";
import { Link } from "react-router-dom";

function Stocks() {
    const [investment, setInvestment] = useState(25000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const handleClick1 = () => {
    window.location.href = "/";
};
  // Calculate values
  const calculateReturns = () => {
    const totalValue = investment * Math.pow(1 + rate / 100, years);
    const returns = totalValue - investment;
    return { totalValue: totalValue.toFixed(2), returns: returns.toFixed(2) };
  };

  const { totalValue, returns } = calculateReturns();

  // Data for Pie Chart
  const data = [
    { name: "Invested Amount", value: investment },
    { name: "Estimated Returns", value: parseFloat(returns) },
  ];
  const COLORS = ["#8884d8", "#82ca9d"];

  return (
    <div className="main">
        <h1 className="responsive-heading">LUMPSUM RETURNS</h1>
    <div className="calculator-container">
      <div className="calculator-header">
      </div>
      <div className="calculator-body">
        {/* Total Investment */}
        <div className="slider-group">
          <h3>Total Investment</h3>
          <Slider
            value={investment}
            min={1000}
            max={1000000}
            step={500}
            onChange={(e, value) => setInvestment(value)}
          />
          <div className="slider-value">₹ {investment}</div>
        </div>

        {/* Expected Return Rate */}
        <div className="slider-group">
          <h3>Expected Return Rate (p.a)</h3>
          <Slider
            value={rate}
            min={1}
            max={20}
            step={0.5}
            onChange={(e, value) => setRate(value)}
          />
          <div className="slider-value">{rate} %</div>
        </div>

        {/* Time Period */}
        <div className="slider-group">
          <h3>Time Period</h3>
          <Slider
            value={years}
            min={1}
            max={30}
            step={1}
            onChange={(e, value) => setYears(value)}
          />
          <div className="slider-value">{years} Yr</div>
        </div>

        {/* Pie Chart */}
        <div className="chart-container">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
              >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>

        {/* Summary */}
        <div className="summary">
          <p>Invested Amount: <strong>₹ {investment}</strong></p>
          <p>Estimated Returns: <strong>₹ {returns}</strong></p>
          <p>Total Value: <strong>₹ {totalValue}</strong></p>
        </div>

        {/* Invest Now Button */}
        <Button variant="contained" color="success" className="invest-button" onClick={handleClick1}>
          Invest Now
        </Button>
      </div>
    </div>
</div>
  );
}

export default Stocks;
