import * as actions from "./actionTypes";


export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.GET_USERS:
      return [
        ...action.payload.users
      ];
    default:
      return state;
  }
}
