const initState = {
  sliceData: new Array(100).fill(null).map(() => Array(100).fill(0)),
  totalSlices: 0,
  flavourSliceCount: new Array(100).fill(0),
  personSliceCount: new Array(100).fill(0),
  personOrderCheck: new Array(100).fill(false),
};

export default (state = initState, action) => {
  const blankState = {
    sliceData: new Array(100).fill(null).map(() => Array(100).fill(0)),
    totalSlices: 0,
    flavourSliceCount: new Array(100).fill(0),
    personSliceCount: new Array(100).fill(0),
    personOrderCheck: new Array(100).fill(false),
  };
  let newState = Object.assign({}, state);
  if (action.type === 'setSlices') {
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
    }
    return newState;
  } else if (action.type === 'confirmOrder') {
    const personIndex = Number(action.payload.personIndex);
    newState.personOrderCheck[personIndex] = true;
    return newState;
  } else if (action.type === 'reset') {
    newState = Object.assign({}, blankState);
    return newState;
  } else {
    return state;
  }
};
