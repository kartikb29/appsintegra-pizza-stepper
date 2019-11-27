import React, { Component } from 'react'
import { connect } from 'react-redux'
import setSettings from '../actions/setSettings'
import setSlices from '../actions/setSlices'
import { bindActionCreators } from 'redux'

import { Card } from 'react-bootstrap'

class Flavour extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  incrementSlice = (personIndex, flavourIndex) => {
    const sliceByPerson = this.props.sliceStore.personSliceCount.slice(0, Number(personIndex) + 1)
    if (sliceByPerson[personIndex] < this.props.settings.numberOfSliceRequests) {
      const operation = '+'
      this.props.setSlices(operation, personIndex, flavourIndex)
    }
  }

  decrementSlice = (personIndex, flavourIndex) => {
    const operation = '-'
    this.props.setSlices(operation, personIndex, flavourIndex)
  }

  render () {
    const flavourIndex = this.props.flavourIndex
    const personIndex = this.props.personIndex
    return (
      <div className="col-sm-2">
        <Card bg="light">
          <Card.Body>
            <Card.Title>Flavour {flavourIndex}</Card.Title>
            <Card.Text>Slices: {this.props.sliceStore.sliceData[personIndex][flavourIndex]}</Card.Text>
            <p></p>
            <input className="btn btn-primary" type="button" value="+" onClick={() => { this.incrementSlice(personIndex, flavourIndex) }} />
            <span>  </span>
            <input className="btn btn-secondary" type="button" value="-" onClick={() => { this.decrementSlice(personIndex, flavourIndex) }}/>
          </Card.Body>
        </Card>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Flavour)
