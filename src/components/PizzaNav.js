import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class PizzaNav extends Component {
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
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    orderStore: state.orderStore,
  };
}


export default connect(mapStateToProps)(PizzaNav);
