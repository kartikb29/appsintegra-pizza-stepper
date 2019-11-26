import React, { Component } from 'react'
import Settings from './Settings'
import PersonList from './PersonList'
import OrderInfo from './OrderInfo'
import { connect } from 'react-redux'
import setSettings from '../actions/setSettings'
import setSlices from '../actions/setSlices'
import { bindActionCreators } from 'redux'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

class PizzaStepper extends Component {
  constructor () {
    super()
    this.state = {
      activeStep: 0
    }
  }

  handleNext = () => {
    const { activeStep } = this.state
    if (activeStep <= 2) {
      this.setState({
        activeStep: activeStep + 1
      })
    }
  };

  handleBack = () => {
    const { activeStep } = this.state
    if (activeStep > 0) {
      this.setState({
        activeStep: activeStep - 1
      })
    }
  };

  handleReset = () => {
    const settings = {
      numberOfPeople: 0,
      numberOfSlices: 0,
      numberOfFlavours: 0,
      numberOfFlavourRequests: 0
    }
    this.props.setSettings(settings)
    this.props.setSlices('r')
    this.setState({
      activeStep: 0
    })
  };

  getStep = () => {
    const { activeStep } = this.state
    if (activeStep === 0) {
      return <Settings />
    } else if (activeStep === 1) {
      return <PersonList />
    } else if (activeStep === 2) {
      return <OrderInfo />
    } else {
      return <Typography>Thank You</Typography>
    }
  }

  render () {
    const { activeStep } = this.state
    return (
      <Container>
        <Stepper activeStep={activeStep}>
          <Step key={0}>
            <StepLabel>Settings</StepLabel>
          </Step>
          <Step key={1} active={true}>
            <StepLabel>Order</StepLabel>
          </Step>
          <Step key={2}>
            <StepLabel>Order Summary</StepLabel>
          </Step>
        </Stepper>
        <div>
          {this.getStep()}
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
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.settings,
    sliceStore: state.sliceStore
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setSettings: setSettings,
    setSlices: setSlices
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaStepper)
