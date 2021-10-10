import * as actions from "./actionTypes";

// export function addBug(description) {
//   return {
//     type: actions.ADD_BUG,
//     payload: {
//       description, //: "our first bug",
//     },
//   };
// }

// export function removeBug(id) {
//   return {
//     type: actions.REMOVE_BUG,
//     payload: {
//       id: id,
//     },
//   };
// }

// export function resolveBug(id) {
//     return {
//         type: actions.RESOLVE_BUG,
//         payload: {
//             id,
//         },
//     };
// }

// export function addCourse(course) {
//   return {
//     type: actions.ADD_COURSE,
//     payload: {
//       course,
//     }
//   }
// }

// export function removeCourse(course) {
//   return {
//     type: actions.REMOVE_COURSE,
//     payload: {
//       course,
//     }
//   }
// }


export function getUsers() {
  return {
    type: actions.GET_USERS,
    payload: {
      
    }
  }
}
export function addUser(course) {
  return {
    type: actions.ADD_USER,
    payload: {
      course,
    }
  }
}
export function putUser(course) {
  return {
    type: actions.PUT_USER,
    payload: {
      course,
    }
  }
}
export function patchUser(course) {
  return {
    type: actions.PATCH_USER,
    payload: {
      course,
    }
  }
}
export function deleteUser(course) {
  return {
    type: actions.DELETE_USER,
    payload: {
      course,
    }
  }
}