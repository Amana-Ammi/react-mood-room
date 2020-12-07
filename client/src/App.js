import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Start from './components/Start';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/start" component={Start} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:video_id" exact component={NowPlaying} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
