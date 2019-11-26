import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flavour from './Flavour'

import { Card } from 'react-bootstrap'

class Person extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  getFlavour = (i) => {
    return <Flavour key={i} flavourIndex={i} personIndex={this.props.personIndex} />
  }

  render () {
    const flavourList = []
    for (let i = 1; i <= Number(this.props.settings.numberOfFlavours); i++) {
      flavourList.push(this.getFlavour(i))
    }
    return (
      <div>
        <Card>
          <Card.Header as="h5">Person: {this.props.personIndex}</Card.Header>
          <Card.Body>
            <div className="row justify-content-center">
              {flavourList}
            </div>
          </Card.Body>
        </Card>
        <p></p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Person)
