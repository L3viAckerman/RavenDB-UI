import React, { Component } from 'react';
import classes from './SideBar.module.css';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className={classes.SideBar}>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/' exact>Query</NavLink>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/insert'>Count</NavLink>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/update'>Update</NavLink>
        <NavLink className={classes.Nav} activeClassName={classes.activeLink} to='/delete'>Delete</NavLink>
      </div>
    );
  }
}

export default SideBar;