import Header from './Components/Header';
import Home from './Components/Home';
import Api from './Components/Api';
import Start from './Components/Start';
import Blue from './Components/Blue';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/api" component={Api} />
          <Route path="/start" component={Start} />
          <Route path="/blue" component={Blue} />
          {/* <Route path="/afrobeat" component={Start} /> */}
          {/* <Route path="/danceroom" component={Start} />  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
