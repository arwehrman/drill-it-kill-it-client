import { GET_DRILLS, CREATE_DRILL, DELETE_DRILL, LIKE_DRILL } from '../constants/actionTypes';
import { browserHistory } from 'react-router';

export default(state = [], action) => {

  switch (action.type) {

    case GET_DRILLS:
      return action.drills;

    case CREATE_DRILL:
      const drill = Object.assign({}, action.drill)
      return [...state, drill];

    case DELETE_DRILL:{
      const newState = Object.assign([], state);
      const indexOfDrillToDelete = state.findIndex(drill => {
        return drill.id === action.id
      })
      newState.splice(indexOfDrillToDelete, 1);
      browserHistory.push('/drills');
      return newState;
    }

    case LIKE_DRILL:
      return action.drills

    default:
      return state;
  }
};
