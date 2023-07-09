import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, deleteStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map((stock) => {
          return <Stock key={Math.random()} stock={stock} onClick={deleteStock}/>
        })
      }
    </div>
  );
}

export default PortfolioContainer;
