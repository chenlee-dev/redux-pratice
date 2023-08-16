import React from 'react';
import './Nav.scss';
import {
    Link, NavLink
  } from "react-router-dom";
  

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact='true' >Home</NavLink>
                <NavLink to="/todo" aactiveclassname="active">To Do</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
                <NavLink to="/user" activeclassname="active">User</NavLink>           
            </div>
        )
    }
}

export default Nav;