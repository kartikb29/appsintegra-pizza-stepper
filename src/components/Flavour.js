import React, { Component } from 'react'
import { connect } from 'react-redux'
import setSettings from '../actions/setSettings'
import setSlices from '../actions/setSlices'
import { bindActionCreators } from 'redux'

class Flavour extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  incrementSlice = (personIndex, flavourIndex) => {
    const sliceCountByPerson = this.props.sliceStore.sliceData[personIndex][flavourIndex]
    const sliceByPerson = this.props.sliceStore.personSliceCount.slice(0,Number(personIndex) + 1)
    if ((sliceCountByPerson < this.props.settings.numberOfFlavourRequests) && sliceByPerson[personIndex] < 4) {
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
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Flavour {flavourIndex}</h5>
            <h6 className="card-text">Slices: {this.props.sliceStore.sliceData[personIndex][flavourIndex]}</h6>
            <p></p>
            <input className="btn btn-primary" type="button" value="+" onClick={() => { this.incrementSlice(personIndex, flavourIndex) }} />
            <span> </span>
            <input className="btn btn-secondary" type="button" value="-" onClick={() => { this.decrementSlice(personIndex, flavourIndex) }}/>
          </div>
        </div>
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
