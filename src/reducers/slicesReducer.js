const initState = {
  sliceData: new Array(100).fill(null).map(() => Array(100).fill(0)),
  totalSlices: 0,
  flavourSliceCount: new Array(100).fill(0),
  personSliceCount: new Array(100).fill(0),
};

export default (state = initState, action) => {
  const blankState = {
    sliceData: new Array(100).fill(null).map(() => Array(100).fill(0)),
    totalSlices: 0,
    flavourSliceCount: new Array(100).fill(0),
    personSliceCount: new Array(100).fill(0),
  };
  if (action.type === 'setSlices') {
    let newState = Object.assign({}, state);
    const personIndex = Number(action.payload.personIndex);
    const flavourIndex = Number(action.payload.flavourIndex);
    if (action.payload.operation === '+') {
      newState.sliceData[personIndex][flavourIndex]++;
      newState.totalSlices++;
      newState.flavourSliceCount[flavourIndex]++;
      newState.personSliceCount[personIndex]++;
    } else if (action.payload.operation === '-') {
      if (newState.sliceData[personIndex][flavourIndex] > 0) {
        newState.sliceData[personIndex][flavourIndex]--;
        newState.totalSlices--;
        newState.flavourSliceCount[flavourIndex]--;
        newState.personSliceCount[personIndex]--;
      }
    } else if (action.payload.operation === 'r') {
      newState = Object.assign({}, blankState);
    }
    return newState;
  } else {
    return state;
  }
};
