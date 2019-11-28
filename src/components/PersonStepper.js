import React, {Component} from 'react';
import PersonForm from './PersonForm';
import PersonOrder from './PersonOrder';
import {connect} from 'react-redux';
import setSettings from '../actions/setSettings';
import setSlices from '../actions/setSlices';
import {bindActionCreators} from 'redux';

import {Stepper, Step, StepLabel, Button, Container, Typography} from '@material-ui/core';

class PersonStepper extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    const {activeStep} = this.state;
    if (activeStep < 1) {
      this.setState({
        activeStep: activeStep + 1,
      });
    }
  };

  handleBack = () => {
    const {activeStep} = this.state;
    if (activeStep > 0) {
      this.setState({
        activeStep: activeStep - 1,
      });
    }
  };

  handleReset = () => {

  };

  getStep = (personId) => {
    const {activeStep} = this.state;
    if (activeStep === 0) {
      return <PersonForm personIndex={personId} />;
    } else if (activeStep === 1) {
      return <PersonOrder personIndex={personId}/>;
    } else {
      return <div>
        <Typography>Thank You</Typography>
        <p></p>
      </div>;
    }
  };

  render() {
    const {activeStep} = this.state;
    const personId = this.props.match.params.personId;
    const maxPeople = Number(this.props.settings.numberOfPeople);
    if (personId <= maxPeople) {
      return (
        <Container>
          <Stepper activeStep={activeStep}>
            <Step key={0}>
              <StepLabel>Add Details</StepLabel>
            </Step>
            <Step key={2}>
              <StepLabel>Place your order</StepLabel>
            </Step>
          </Stepper>
          <div>
            {this.getStep(personId)}
          </div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={this.handleReset}
              variant="outlined"
              color="primary"
            >Reset</Button>
            <span> </span>
            <Button
              disabled={activeStep === 0}
              onClick={this.handleBack}
              variant="contained"
            >Back</Button>
            <span> </span>
            <Button
              onClick={this.handleNext}
              variant="contained"
              color="primary"
            >Next</Button>
          </div>
        </Container>
      );
    } else {
      return (
        <Container>
          <p></p>
          <h5>Sorry! You cannot place an order, please contact the admin.</h5>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSettings: setSettings,
    setSlices: setSlices,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonStepper);
