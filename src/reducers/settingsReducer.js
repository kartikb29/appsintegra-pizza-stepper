const initSettings =
  {
    numberOfPeople: 0,
    numberOfSlices: 0,
    numberOfFlavours: 0,
    numberOfFlavourRequests: 0
  }

export default (state = initSettings, action) => {
  if (action.type === 'setSettings') {
    let newState = Object.assign(state)
    newState = action.payload.data
    return newState
  } else {
    return state
  }
}
