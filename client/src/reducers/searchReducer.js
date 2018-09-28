import { CHANGE_SEARCH_HANDLER } from "../actions/types";

const initialState = {
  searchField: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_HANDLER:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
}
