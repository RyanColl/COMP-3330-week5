import * as actions from "./actionTypes";


export default async function reducer(state = [], action) {
  switch (action.type) {
    case actions.GET_USERS:
      return [
        ...state,
      ];
    case actions.ADD_USER:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.PATCH_USER:
         let arr1 = state.filter((bug) => bug.id !== action.payload.id)
         let arr2 = state.filter((bug) => bug.id === action.payload.id)
         console.log(arr2[0])
         return [
            ...arr1,
            {...arr2[0], resolved: true}
          ]
    case actions.PUT_USER:
          return [
            ...state,
            {
              id: state.length + 1,
              course: action.payload.course
            },
          ]
    case actions.DELETE_USER:
          return [
            ...state.filter(course => course.course === action.payload.course)
          ]
    default:
      return state;
  }
}
