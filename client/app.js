import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Synth from './synth';
// import Navbar from './navbar';
import Landing from './landing';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path='/synth' component={Synth} />
      <Route exact path='/' component={Landing} />
    </Router>
  );
};

export default App;
