export default (data) => {
  return {
    type: 'setSettings',
    payload: {
      data,
    },
  };
};
