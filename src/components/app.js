import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import About from './about';
import Contact from './contact';
import RegionForm from './region-form';
import TrailResults from './trail-results';
import TrailDetail from './trail-detail';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/results" component={TrailResults} />
          <Route path="/results/trail-detail" component={TrailDetail} />
          <footer>
            <div className="footer">
             © 2017 Hiking Trails in Sweden — a project by Vocado78
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
