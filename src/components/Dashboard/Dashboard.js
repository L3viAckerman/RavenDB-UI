import React, { Component } from 'react';
import classes from './Dashboard.module.css'
import SideBar from '../SideBar/SideBar';
import { Switch, Route } from 'react-router-dom';
import Insert from '../Insert/Insert';
import Query from '../Query/Query';
import Update from '../Update/Update';
import Delete from '../Delete/Delete';

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <SideBar />
        <Switch>
          <Route path="/insert" component={Insert} />
          <Route path="/update" component={Update} />
          <Route path="/delete" component={Delete} />
          <Route path="/" component={Query} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;