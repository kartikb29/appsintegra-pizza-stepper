import React, {Component} from 'react';
import {connect} from 'react-redux';
import setPerson from '../actions/setPerson';
import {bindActionCreators} from 'redux';

import {Button, Form, Row, Col, Container} from 'react-bootstrap';

class PersonForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  setName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  storePerson = (e) => {
    e.preventDefault();
    const data = this.state;
    const personIndex = this.props.personIndex;
    this.props.setPerson(personIndex, data);
  }

  render() {
    return (
      <Container>
        <h3>Settings</h3>
        <p></p>
        <Form onSubmit={this.storePerson}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Name: </Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.setName} type="text" placeholder="Enter name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Eamil: </Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.setEmail} type="text" placeholder="Enter email" />
            </Col>
          </Form.Group>
          <p></p>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <p></p>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    personStore: state.personReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setPerson: setPerson,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonForm);
