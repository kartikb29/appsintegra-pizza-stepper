export default (personIndex, data) => {
  return {
    type: 'setPerson',
    payload: {
      personIndex,
      data,
    },
  };
};
