import * as actions from "./actionTypes";

export function getUsers(users) {
  return {
    type: actions.GET_USERS,
    payload: {
      users,
    }
  }
}