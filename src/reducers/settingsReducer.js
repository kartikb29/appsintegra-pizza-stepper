const initSettings =
  {
    numberOfPeople: 0,
    numberOfSlices: 0,
    numberOfFlavours: 0,
    numberOfSliceRequests: 0,
  };

export default (state = initSettings, action) => {
  const blankSettings = {
    numberOfPeople: 0,
    numberOfSlices: 0,
    numberOfFlavours: 0,
    numberOfSliceRequests: 0,
  };
  let newState = Object.assign({}, state);
  if (action.type === 'setSettings') {
    newState = action.payload.data;
    return newState;
  } else if (action.type === 'reset') {
    newState = blankSettings;
    return newState;
  } else {
    return state;
  }
};
