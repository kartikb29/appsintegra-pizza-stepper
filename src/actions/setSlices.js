export default (operation, personIndex, flavourIndex) => {
  return {
    type: 'setSlices',
    payload: {
      operation,
      personIndex,
      flavourIndex,
    },
  };
};
