import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';

/*
  TODO:
    1. Optimization code
    2. Deploy all to server
    *Fix Window animation
 */

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout />
      </React.Fragment>
    );
  }
}

export default App;
