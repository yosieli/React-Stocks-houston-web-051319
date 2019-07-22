import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {



  onChangeStatus=(id)=>{
    console.log('click!',id)

    this.props.handleChangeStock(id)
    
  }
 

  render() {
    
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.allStocks.map(stock => <Stock stock={stock} onChangeStatus={this.onChangeStatus}/>)}
      
              
      </div>
    );
  }

}

export default StockContainer;
