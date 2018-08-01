import { GET_DRILLS, CREATE_DRILL, DELETE_DRILL } from '../constants/actionTypes';

export default(state = [], action) => {

  switch (action.type) {

    case GET_DRILLS:
      return action.drills;

    case CREATE_DRILL:
    return [...state, action.drill];

    case DELETE_DRILL:
      return state.filter(drill => drill.id !== action.drillId)

    default:
      return state;
  }
};
