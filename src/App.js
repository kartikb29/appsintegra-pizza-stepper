import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import AdminStepper from './components/AdminStepper';
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
            <Link to={'/admin'}>Admin</Link>
            <NavDropdown title="People" id="basic-nav-dropdown">
              {this.getDropDownList()}
            </NavDropdown>
          </Navbar>
          <Route exact path="/admin" component={AdminStepper} />
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
    sliceStore: state.sliceStore,
  };
}

export default connect(mapStateToProps)(App);
