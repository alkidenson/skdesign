import { Action, DataState } from '../types';

export const initState: DataState = {
  data: []
};

export const dataReducer = (state: DataState = initState, action: Action): DataState => {
  switch (action.type) {
    case 'data/load':
      return {
        ...state,
        data: action.payload
      };
      case 'data/add':
      return {
        ...state,
        data: [action.payload, ...state.data]      };
    default:
      return state;
      
  }
};