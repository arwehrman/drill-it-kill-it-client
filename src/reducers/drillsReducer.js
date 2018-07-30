import { GET_DRILLS, CREATE_DRILL, DELETE_DRILL } from '../constants/actionTypes';

export default(state = [], action) => {

  switch (action.type) {

    case GET_DRILLS:
      return action.drills;

    case CREATE_DRILL:
    return [...state, action.drill];

    case DELETE_DRILL:{
      const newState = Object.assign([], state);
      const indexOfDrillToDelete = state.findIndex(drill => {
        return drill.id === action.id
      })
      newState.splice(indexOfDrillToDelete, 1);
      return newState;
    }

    default:
      return state;
  }
};
