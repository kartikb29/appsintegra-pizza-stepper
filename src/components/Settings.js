import React, { Component } from 'react'
import { connect } from 'react-redux'
import setSettings from '../actions/setSettings'
import { bindActionCreators } from 'redux'

import { Button , Form , Container } from 'react-bootstrap';



class Settings extends Component {
  constructor () {
    super()
    this.state = {
      numberOfPeople: 0,
      numberOfSlices: 0,
      numberOfFlavours: 0,
      numberOfFlavourRequests: 0
    }
  }

  setPeople = (e) => {
    this.setState({
      numberOfPeople: e.target.value
    })
  }

  setSlices = (e) => {
    let slices = e.target.value
    if (slices > 18) { slices = 18 }
    if (slices < 6) { slices = 6 }
    this.setState({
      numberOfSlices: slices
    })
  }

  setFlavours = (e) => {
    this.setState({
      numberOfFlavours: e.target.value
    })
  }

  setFlavourRequests = (e) => {
    this.setState({
      numberOfFlavourRequests: e.target.value
    })
  }

  storeSettings = (e) => {
    e.preventDefault()
    const data = this.state
    this.props.setSettings(data)
  }

  render () {
    return (
      <Container>
        <h3>Settings</h3>
        <p></p>
        <Form onSubmit={this.storeSettings}>
          <Form.Control id="filled-basic" onChange={this.setPeople} type="number" placeholder="Enter number of people" />
          <Form.Control onChange={this.setSlices} type="number" placeholder="Enter number of slices in a pizza" />
          <Form.Control onChange={this.setFlavours} type="number" placeholder="Enter number of flavours" />
          <Form.Control onChange={this.setFlavourRequests} type="number" placeholder="Enter maximum slice/person/flavour" />
          <p></p>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <p></p>
      </Container>
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setSettings: setSettings
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
