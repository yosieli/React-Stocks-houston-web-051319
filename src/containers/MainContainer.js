import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks:[],
    portfolio:[],
    searchTerm:''
  }



  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(result=>{
      this.setState({
        stocks:result

      })
    })
  }

  buyStock = id => {
    console.log('changing from stock to port', id);
    let test = this.state.stocks.filter(stock => stock.id === id)
    let portTest = this.state.portfolio.filter(stock => stock.id === id)
    // console.log(test)
    if(test.length === 1){
      this.setState({
        stocks: this.state.stocks.filter(stock => stock.id !== id),
        portfolio: [...this.state.portfolio, ...test]
      })
    }
    else{
      this.setState({
        stocks: [...this.state.stocks, ...portTest],
        portfolio: this.state.portfolio.filter(stock => stock.id !== id)
      })
    }

    
    }
    
    changeSearch =(searchTerm) =>{
      this.setState({
        searchTerm:searchTerm
      })

    }

  

  render() {
    return (
      <div>
        <SearchBar searchTerm={this.state.searchTerm} onSerach={this.changeSearch}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks = {this.state.stocks} handleChangeStock = {this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer allStocks = {this.state.portfolio} handleChangeStock = {this.buyStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
