import React, { Component } from 'react';
import classes from '../../styles/Style.module.css';
import Axios from 'axios';
class Update extends Component {
  
  state = {
    result: null,
    loading: false,
    Id: null
  }
  

  handleUpdate = () => {
    this.setState({loading: true});
    Axios.put('http://localhost:8000/api/Query/' + this.state.Id)
    .then(result => {
      console.log(result)
      this.setState({ result: `Take ${result.data.milliseconds} ms`, loading: false})
    })
    .catch(error => {
      console.log(error)
      this.setState({loading: false, result: "Something went wrong"})
    } )
  }

  handleChange = (event) => {
    this.setState({Id: event.target.value})
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
          <div style={{fontWeight: 'bold'}}>Input key</div>
          <div>
            <p>Id</p>
            <input value={this.state.Id} type="text" onChange={this.handleChange} />
           
            <button className={classes.Button} onClick={this.handleUpdate}>Update by key</button>
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

export default Update;