import React, {Component} from 'react';
import {connect} from 'react-redux';
import Flavour from './Flavour';
import confirmOrder from '../actions/confirmOrder';
import {bindActionCreators} from 'redux';

import {Card, Button} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';


class PersonOrder extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  getFlavour = (i) => {
    return <Flavour key={i} flavourIndex={i} personIndex={this.props.personIndex} />;
  }

  handleConfirmOrder = (personIndex) => {
    this.props.confirmOrder(personIndex);
  }

  getProgressBar = (yourProgress) => {
    if (yourProgress < 100) {
      return (<ProgressBar animated variant="info" now={yourProgress}></ProgressBar>);
    } else {
      return (<ProgressBar variant="success" now={yourProgress}></ProgressBar>);
    }
  }

  render() {
    const flavourList = [];
    const numberOfFlavours = Number(this.props.settings.numberOfFlavours);
    const numberOfSliceRequests = this.props.settings.numberOfSliceRequests;
    const personIndex = this.props.personIndex;
    const numberOfSlicesByPerson = this.props.orderStore.personSliceCount[personIndex];
    const yourProgress = (numberOfSlicesByPerson/numberOfSliceRequests)*100;

    for (let i = 1; i <= Number(numberOfFlavours); i++) {
      flavourList.push(this.getFlavour(i));
    }
    return (
      <div>
        <Card>
          <Card.Header as="h5">Person: {this.props.personIndex}</Card.Header>
          <p></p>
          <Card.Title>You can pick upto {this.props.settings.numberOfSliceRequests} slices!</Card.Title>
          <Card.Body>
            <div className="row justify-content-center">
              {flavourList}
            </div>
          </Card.Body>
          {this.getProgressBar(yourProgress)}
          <p></p>
        </Card>
        <p></p>
        <Button variant="primary" onClick={() => {
          this.handleConfirmOrder(personIndex);
        }}>Submit</Button>
        <p></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    orderStore: state.orderStore,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    confirmOrder: confirmOrder,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonOrder);
