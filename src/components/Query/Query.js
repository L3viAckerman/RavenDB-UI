import React, { Component } from 'react';
import Axios from 'axios';
import classes from '../../styles/Style.module.css';


class Insert extends Component {

  state = {
    result: null,
    loading: false,
    Id: null,
    cost: 10000
  }
  
  GetOne = () => {
    this.setState({loading: true});
    Axios.get('http://localhost:8000/api/Query/GetById/' + this.state.Id)
    .then(result => {
      console.log(result)
      this.setState({ result: `CustomerName is ${result.data.customer.name}. Query takes ${result.data.milliseconds} ms`, loading: false})
    })
    .catch(error => this.setState({loading: false, result: "Something went wrong"}))
  }

  GetByCost = () => {
    this.setState({loading: true});
    Axios.get('http://localhost:8000/api/Query/' + this.state.Cost)
    .then(result => {
      console.log(result)
      this.setState({ result: `CustomerName is ${result.data.customer.name}, supported by ${result.data.employee.name}. Query takes ${result.data.milliseconds} ms,`, loading: false})
    })
    .catch(error => this.setState({loading: false, result: "Something went wrong"}))
  }

  handleIdChange = (event) => {
    this.setState({Id: event.target.value})
  }

  handleCostChange = (event) => {
    this.setState({Cost: event.target.value})
  }

  render() {
    if(this.state.queryData) {

    }
    let data = 'Processing...'
    if(!this.state.loading) {
      data = this.state.result;
    }
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Controller}>
          <div style={{fontWeight: 'bold'}}>Get by cost</div>
          <div>
            <p>Cost</p>
            <input value={this.state.Cost} type="Text" onChange={this.handleCostChange} />
            <button className={classes.Button} onClick={this.GetByCost}>Get by cost </button>
          </div>
          <div style={{fontWeight: 'bold'}}>Get by Id</div>
          <div>
            <p>Id</p>
            <input value={this.state.Id} type="Text" onChange={this.handleIdChange} />
            <button className={classes.Button} onClick={this.GetOne}>Get by key</button>
          </div>
        </div>
        <div>
          <div style={{fontWeight: 'bold', margin: '30px'}}>Result:</div>          
          <div className={classes.Result}>{data}</div>
        </div>
      </div>
    );
  }
}

export default Insert;