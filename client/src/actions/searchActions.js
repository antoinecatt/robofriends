import { CHANGE_SEARCH_HANDLER } from "./types";

export const searchRobots = text => ({
  type: CHANGE_SEARCH_HANDLER,
  payload: text
});
