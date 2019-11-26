import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

class OrderInfo extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    const numberOfFlavours = Number(this.props.settings.numberOfFlavours) + 1
    const flavourSliceCount = (this.props.sliceStore.flavourSliceCount).slice(1, numberOfFlavours)
    const slicePerPizza = Number(this.props.settings.numberOfSlices)
    const flavourList = flavourSliceCount.map((data, index) => {
      const value = Math.ceil(data / slicePerPizza)
      return (
        <div className="col-sm-2" key={index}>
          <Card bg="light">
            <Card.Header as="h5">Flavour {index + 1}</Card.Header>
            <Card.Title>{value}</Card.Title>
          </Card>
          <p></p>
        </div>
      )
    })
    const totalSlices = this.props.sliceStore.totalSlices
    return (
      <div>
        <h3>Order Info</h3>
        <Card>
          <Card.Header as="h5">Total Slices: {totalSlices}</Card.Header>
          <p></p>
          <div className="row justify-content-center">
            {flavourList}
          </div>
          <p></p>
        </Card>
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
