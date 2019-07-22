import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  onChangeStatus=(id)=>{
    console.log('click!',id)

    this.props.handleChangeStock(id)
    
  }
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>

          {
            this.props.allStocks.map(stock => <Stock stock ={stock} onChangeStatus={this.onChangeStatus}/>)
            //render your portfolio stocks here
            
          }
          
      </div>
    );
  }

}

export default PortfolioContainer;
