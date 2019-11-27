import React, {Component} from 'react';
import PersonForm from './PersonForm';
import PersonOrder from './PersonOrder';
import {connect} from 'react-redux';
import setSettings from '../actions/setSettings';
import setSlices from '../actions/setSlices';
import {bindActionCreators} from 'redux';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class PersonStepper extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    const {activeStep} = this.state;
    if (activeStep <= 1) {
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
    const settings = {
      numberOfPeople: 0,
      numberOfSlices: 0,
      numberOfFlavours: 0,
      numberOfFlavourRequests: 0,
    };
    this.props.setSettings(settings);
    this.props.setSlices('r');
    this.setState({
      activeStep: 0,
    });
  };

  getStep = (personId) => {
    const {activeStep} = this.state;
    if (activeStep === 0) {
      return <PersonForm personIndex={personId} />;
    } else if (activeStep === 1) {
      return <PersonOrder personIndex={personId}/>;
    } else {
      return <Typography>Thank You</Typography>;
    }
  }

  render() {
    const {activeStep} = this.state;
    const personId = this.props.match.params.personId;
    const maxPeople = this.props.settings.numberOfPeople;
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
        <h3>Sorry! You cannot place an order, please contact the admin.</h3>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    sliceStore: state.sliceStore,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSettings: setSettings,
    setSlices: setSlices,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonStepper);
