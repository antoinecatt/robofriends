import {
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from "./types";

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOT_PENDING });
  fetch("/robots")
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOT_FAILED, payload: err }));
};
