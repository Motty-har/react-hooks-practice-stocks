import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sort, setSort] = useState("Alphabetically")
  const [filter, setFilter] = useState("Tech")
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])
  function addStock(stock){
    const add = portfolio.find((stocks) => {
      return stocks.id === stock.id
    })
    if(!add){
      setPortfolio([...portfolio, stock])
    }
  }
  function deleteStock(stock){
    const remove = portfolio.filter((stocks) => {
      return stocks.id !== stock.id
    })
    setPortfolio(remove)
  }
  const sorted = [...stocks].sort((a, b) => {
    if (sort === "Alphabetically") {
      return a.name.localeCompare(b.name);
    } else {
      return a.price - b.price;
    }
  });
  const filtered = sorted.filter((stock) => {
    return stock.type === filter
  })
  return (
    <div>
      <SearchBar setSort={setSort} sort={sort} filter={filter} setFilter={setFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filtered} addStock={addStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} deleteStock={deleteStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
