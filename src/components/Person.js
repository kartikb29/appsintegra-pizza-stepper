import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flavour from './Flavour'

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
      <li className="list-group-item list-group-item-light">
        <h5>Person: {this.props.personIndex}</h5>
        <div className="row">
          {flavourList}
        </div>
        <p></p>
      </li>
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Person)
