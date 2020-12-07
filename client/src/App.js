import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import PickMood from './components/PickMood';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';
import About from './components/About';
import FollowMe from './components/FollowMe';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/start" component={PickMood} />
            <Route path="/about" component={About} />
            <Route path="/:video_id" exact component={NowPlaying} />
          </Switch>
        <FollowMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
