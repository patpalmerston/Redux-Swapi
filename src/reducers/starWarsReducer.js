import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  error: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true
      };

    case FETCH_SUCCESS: 
      console.log(action.payload)
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };

      case FETCH_FAILURE: 
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};


