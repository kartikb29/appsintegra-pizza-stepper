import React, { Component } from 'react'
import { connect } from 'react-redux'

class OrderInfo extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    const numberOfFlavours = Number(this.props.settings.numberOfFlavours) + 1
    const flavourSliceCount = (this.props.sliceStore.flavourSliceCount)
    const flavourList = flavourSliceCount.slice(1, numberOfFlavours).map((data, index) => {
      return (
        <li className="list-group-item" key={index} >Flavour {index + 1}: {Math.ceil(data / this.props.settings.numberOfSlices)}</li>
      )
    })
    const totalSlices = this.props.sliceStore.totalSlices
    return (
      <div className="container">
        <h3>Order Info</h3>
        <h5 className="container">Total Slices: {totalSlices}</h5>
        <p></p>
        <div className="container">
          <ul className="list-group">
            {flavourList}
          </ul>
        </div>
        <p></p>
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

export default connect(mapStateToProps)(OrderInfo)
