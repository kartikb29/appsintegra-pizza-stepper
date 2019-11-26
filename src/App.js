import React, { Component } from 'react'
import './App.css'
import PizzaStepper from './components/PizzaStepper'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <PizzaStepper>
        </PizzaStepper>
        <p></p>
      </div>
    )
  };
}

function mapStateToProps (state) {
  return {
    settings: state.settings,
    sliceStore: state.sliceStore
  }
}

export default connect(mapStateToProps)(App)
