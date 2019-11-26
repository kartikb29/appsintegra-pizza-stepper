import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from './Person'

class PersonList extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  getPerson = (i) => {
    return <Person key={i} personIndex={i} />
  }

  render () {
    const personList = []
    for (let i = 1; i <= Number(this.props.settings.numberOfPeople); i++) {
      personList.push(this.getPerson(i))
    }
    return (
      <div className="container">
        <h3>Order Details</h3>
        {personList}
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

export default connect(mapStateToProps)(PersonList)
