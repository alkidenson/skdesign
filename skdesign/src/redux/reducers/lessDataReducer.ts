import { Action, NewDataState } from '../types';

export const initState: NewDataState = {
  newdata: [],
};

export const lessDataReducer = (
  state: NewDataState = initState,
  action: Action
): NewDataState => {
  switch (action.type) {
    case 'lessData/load':
      return {
        ...state,
        newdata: action.payload,
      };
    case 'lessData/add':
      return {
        ...state,
        newdata: [action.payload, ...state.newdata],
      };
    default:
      return state;
  }
};
