import {
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from "../actions/types";

const initialState = {
  robots: [],
  isPending: false,
  err: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_ROBOT_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false
      };
    case REQUEST_ROBOT_FAILED:
      return {
        ...state,
        err: action.payload,
        isPending: false
      };
    default:
      return state;
  }
}
