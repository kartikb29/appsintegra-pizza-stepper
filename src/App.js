import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import SettingsForm from './components/SettingsForm';
import OrderInfo from './components/OrderInfo';
import PersonStepper from './components/PersonStepper';


class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  getDropDownItem = (index) => {
    return (
      <div key={index} className="dropdown-item">
        <Link to={`/person/${index}`}>Person {index}</Link>
      </div>
    );
  }

  getDropDownList = () => {
    const dropDownList = [];
    for (let i = 1; i <= Number(this.props.settings.numberOfPeople); i++) {
      dropDownList.push(this.getDropDownItem(i));
    }
    return dropDownList;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>PizzaC</Navbar.Brand>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <div className="dropdown-item">
                <Link to={'/admin/settings'}>Settings</Link>
              </div>
              <div className="dropdown-item">
                <Link to={'/admin/orderinfo'}>Order Information</Link>
              </div>
            </NavDropdown>
            <NavDropdown title="People" id="basic-nav-dropdown">
              {this.getDropDownList()}
            </NavDropdown>
          </Navbar>
          <Route exact path="/admin/settings" component={SettingsForm} />
          <Route exact path="/admin/orderinfo" component={OrderInfo} />
          <Route exact path="/person/:personId" component={PersonStepper} />
          <p></p>
        </div>
      </Router>
    );
  };
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    orderStore: state.orderStore,
  };
}

export default connect(mapStateToProps)(App);
