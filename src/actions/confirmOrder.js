export default (personIndex) => {
  return {
    type: 'confirmOrder',
    payload: {
      personIndex,
    },
  };
};

