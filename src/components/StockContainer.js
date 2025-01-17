import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) =>{
        return <Stock key={stock.id} stock={stock} onClick={addStock}/>
      })}
    </div>
  );
}

export default StockContainer;
