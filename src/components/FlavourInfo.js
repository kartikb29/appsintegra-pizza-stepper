import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

class FlavourInfo extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="col-sm-2">
        <Card bg="light">
          <Card.Header as="h5">Flavour {this.props.index + 1}</Card.Header>
          <Card.Text>Pizzas to order: {this.props.pizzaValue}</Card.Text>
          <Card.Text>Slices to order: {this.props.slicesValue}</Card.Text>
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

export default connect(mapStateToProps)(FlavourInfo)
