import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Game from './pages/Game';

import './App.css';

class App extends Component {
  render() {
    console.log('public url: ', process.env.PUBLIC_URL);
    return (
        <div>
        <Route exact path={`/`} component={Home} />
        <Route path={`/game`} component={Game} />
          <Footer />
        </div>
    );
  }
}

export default App;
