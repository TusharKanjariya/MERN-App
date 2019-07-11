import React, { Component } from 'react';
import Fetch from './fetch';
import Add from './Add';
import Error from './Error';
import Navigation from './Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Fetch} />
            <Route path="/add" component={Add} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;