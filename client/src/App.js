import Header from './Components/Header';
import Home from './Components/Home';
import Start from './Components/Start'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Only show Header when outside of Home? */}
        {/* < Header /> */}
        <Route path="/" exact component={Home} />
        <Route path="/start" component={Start} />
        {/* <Route path="/blueroom" component={Start} />
        <Route path="/afrobeat" component={Start} />
        <Route path="/danceroom" component={Start} /> */}
      </div>
    </Router>
  );
}

export default App;
