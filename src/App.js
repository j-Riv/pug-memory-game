import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Game from './pages/Game';

import './App.css';

class App extends Component {
  render() {
    console.log('public url: ', process.env.PUBLIC_URL);
    return (
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
