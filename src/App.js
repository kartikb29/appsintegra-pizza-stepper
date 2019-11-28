import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SettingsForm from './components/SettingsForm';
import OrderInfo from './components/OrderInfo';
import PersonStepper from './components/PersonStepper';
import PizzaNav from './components/PizzaNav';


class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={PizzaNav} />
          <Route exact path="/admin/settings" component={SettingsForm} />
          <Route exact path="/admin/orderinfo" component={OrderInfo} />
          <Route exact path="/person/:personId" component={PersonStepper} />
          <p></p>
        </div>
      </Router>
    );
  };
}

export default connect()(App);
