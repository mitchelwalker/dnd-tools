import React, { Component } from 'react';
import NavBar from './NavBar'
import Main from './Main'

export default class App extends Component {

  render() {
    return (
        <div>
          <NavBar />
          <div className='container-fluid'>
            {this.props.children}
          </div>
      </div>
    );
  }
}
