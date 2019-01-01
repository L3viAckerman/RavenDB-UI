import React, { Component } from 'react';
import Axios from 'axios';
import classes from '../../styles/Style.module.css';
//import ReactJson from 'react-json-view';

class Insert extends Component {

  state = {
    result: null,
    loading: false
  }
  
  Count = () => {
    this.setState({loading: true});
    Axios.get('http://localhost:8000/api/Query/Count')
    .then(result => {
      console.log(result);
      this.setState({ result: `Have ${result.data.sum}. Query takes ${result.data.milliseconds} ms`, loading: false})
    })
    .catch(error => 
      {
        console.log(error);
        this.setState({loading: false, result: "Something went wrong"})
      })
  }

  render() {
    let data = 'Processing...'
    if(!this.state.loading) {
      data = this.state.result;
    }
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Controller}>
          <div>
            <button className={classes.Button} onClick={this.Count}>Count</button>
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