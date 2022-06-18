import { actionTypes } from "../Actions/ExpenseActionData";

const initialState = {
  expenseData: null,
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return {
        ...state,
        expenseData: action.token,
      };

    default:
      return state;
  }
};

export default expenseReducer;
