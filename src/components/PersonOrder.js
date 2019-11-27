import React, {Component} from 'react';
import {connect} from 'react-redux';
import Flavour from './Flavour';

import {Card} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';


class Person extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  getFlavour = (i) => {
    return <Flavour key={i} flavourIndex={i} personIndex={this.props.personIndex} />;
  }

  render() {
    const flavourList = [];
    const numberOfSlices = this.props.settings.numberOfSlices;
    const personIndex = this.props.personIndex;
    const numberOfSlicesByPerson = this.props.sliceStore.personSliceCount[personIndex];
    const yourProgress = (numberOfSlicesByPerson/numberOfSlices)*100;
    for (let i = 1; i <= Number(this.props.settings.numberOfFlavours); i++) {
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
          <ProgressBar now={yourProgress}></ProgressBar>
        </Card>
        <p></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    sliceStore: state.sliceStore,
  };
}

export default connect(mapStateToProps)(Person);
