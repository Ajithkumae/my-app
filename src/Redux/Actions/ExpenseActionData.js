export const actionTypes = {
  ADD_DATA: "ADD_DATA",
};

export const setExpenseData = (data) => {
  return {
    type: actionTypes.LOGIN,
    token: data,
  };
};
