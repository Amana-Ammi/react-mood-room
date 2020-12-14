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


//  LIVE CODING FOR ASSESSMENT START

// class App extends React.Component {

  // React no longer needs to take the constructor method. Just know it is built in now.
  // Review Constructor and super and setState


  // constructor(props) {
  //   super(props)
  // }  

//   state = {
//     counter: 0
//   }

//   handleOnClick() {
//     this.setState({counter: this.state.counter + 1 })
//   }

//   boundHandleOnClick = this.handleOnClick.bind(this)


//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <p> Counter: {this.state.counter} </p>
//           <button onClick={this.boundHandleOnClick}> Increment </button>

//             <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/start" component={PickMood} />
//               <Route path="/about" component={About} />
//               <Route path="/:video_id" exact component={NowPlaying} />
//             </Switch>
//           <FollowMe />
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
//  LIVE CODING FOR ASSESSMENT END
