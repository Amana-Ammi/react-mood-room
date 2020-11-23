import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NowPlaying from './components/NowPlaying';



function App() {
  return (
    
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          
          <Route path="/blue" component={NowPlaying} />

          <Route path="/:video_id" component={NowPlaying} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
