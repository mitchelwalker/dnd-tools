import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Main from './Main'

export default class App extends Component {

  render() {
    return (
        <div>
          <NavBar />
          <div className='main-content'>
            <Main />
          </div>
        </div>
    );
  }
}
