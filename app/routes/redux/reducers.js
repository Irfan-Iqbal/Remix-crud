// store/reducers.js
import { ADD_DATA, EDIT_DATA, DELETE_DATA } from './actions';

const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case EDIT_DATA:
      return {
        ...state,
        data: state.data.map(item =>
          item.key === action.payload.key ? { ...item, ...action.payload.values } : item
        )
      };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter(item => item.key !== action.payload.key)
      };
    default:
      return state;
  }
};

export default reducer;
