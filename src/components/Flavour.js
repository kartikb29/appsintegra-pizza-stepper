import React, {Component} from 'react';
import {connect} from 'react-redux';
import setSettings from '../actions/setSettings';
import setSlices from '../actions/setSlices';
import {bindActionCreators} from 'redux';
import {ProgressBar} from 'react-bootstrap';

import {Card} from 'react-bootstrap';

class Flavour extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  incrementSlice = (personIndex, flavourIndex) => {
    if (this.checkInput('+')) {
      const sliceByPerson = this.props.orderStore.personSliceCount.slice(0, Number(personIndex) + 1);
      if (sliceByPerson[personIndex] < this.props.settings.numberOfSliceRequests) {
        const operation = '+';
        this.props.setSlices(operation, personIndex, flavourIndex);
      }
    }
  }

  decrementSlice = (personIndex, flavourIndex) => {
    if (this.checkInput('-')) {
      const operation = '-';
      this.props.setSlices(operation, personIndex, flavourIndex);
    }
  }

  checkInput = (operation) => {
    const flavourIndex = Number(this.props.flavourIndex);
    const personIndex = this.props.personIndex;
    const settingState = this.props.settings;
    const numberOfFlavours = Number(settingState.numberOfFlavours);
    const numberOfPeople = Number(settingState.numberOfPeople);
    const maxSlices = Number(settingState.numberOfSliceRequests);
    const numberOfSlicesPerPizza = this.props.settings.numberOfSlices;
    const flavourSliceCount = [...(this.props.orderStore.flavourSliceCount).slice(1, numberOfFlavours + 1)];
    const personSliceCount = [...(this.props.orderStore.personSliceCount).slice(1, numberOfPeople + 1)];
    if (operation === '+') {
      flavourSliceCount[(flavourIndex -1)]++;
      personSliceCount[(personIndex -1)]++;
    } else if (operation === '-') {
      if (this.props.orderStore.sliceData[personIndex][flavourIndex] > 0) {
        flavourSliceCount[(flavourIndex -1)]--;
        personSliceCount[(personIndex -1)]--;
      }
    }
    const newSliceDifference = this.getSliceDifference(flavourSliceCount, numberOfSlicesPerPizza);
    const newPicksRemaining = this.getPicksRemaining(personSliceCount, maxSlices);
    console.log(`NewSliceDifference:${newSliceDifference}`);
    console.log(`NewPicksRemaining:${newPicksRemaining}`);
    if (newSliceDifference <= newPicksRemaining) {
      return true;
    } else {
      return false;
    }
  }

  getSliceDifference = (flavourSliceCount, numberOfSlicesPerPizza) => {
    let sliceDiffernce = 0;
    flavourSliceCount.forEach((element) => {
      const remainder = element%numberOfSlicesPerPizza; // Just increment or decrement element to get new slice difference
      if (remainder) sliceDiffernce += (numberOfSlicesPerPizza-remainder);
    });
    return sliceDiffernce;
  }

  getPicksRemaining = (personSliceCount, maxSlices) => {
    let picksRemaining = 0;
    personSliceCount.forEach((element) => {
      const slicesPicked = element;
      picksRemaining += (maxSlices - slicesPicked);
    });
    return picksRemaining;
  }

  render() {
    const flavourIndex = this.props.flavourIndex;
    const personIndex = this.props.personIndex;
    const numberOfSlicesPerPizza = this.props.settings.numberOfSlices;
    const numberOfSlicesByFlavour = this.props.orderStore.flavourSliceCount[flavourIndex];
    const flavourSliceDiff = (numberOfSlicesByFlavour) % numberOfSlicesPerPizza;
    const progress = (flavourSliceDiff/numberOfSlicesPerPizza)*100;

    return (
      <div className="col-sm-2">
        <Card bg="light">
          <Card.Body>
            <Card.Title>Flavour {flavourIndex}</Card.Title>
            <Card.Text>Slices: {this.props.orderStore.sliceData[personIndex][flavourIndex]}</Card.Text>
            <p></p>
            <input className="btn btn-primary" type="button" value="+" disabled={!this.checkInput('+')} onClick={() => {
              this.incrementSlice(personIndex, flavourIndex);
            }} />
            <span>  </span>
            <input className="btn btn-secondary" type="button" disabled={!this.checkInput('-')} value="-" onClick={() => {
              this.decrementSlice(personIndex, flavourIndex);
            }}/>
          </Card.Body>
        </Card>
        <p></p>
        <ProgressBar variant="danger" now={progress}></ProgressBar>
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
    setSettings: setSettings,
    setSlices: setSlices,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flavour);
