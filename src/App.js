import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Game from './pages/Game';

import './App.css';

class App extends Component {
  render() {
    console.log('public url: ', process.env.PUBLIC_URL);
    return (
      <div className="site">
        <div className="site-content">
          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/game`} component={Game} />
            <Route component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
