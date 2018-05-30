// ** Drills reducer **
export default(state = [], action) => {

  switch (action.type) {

    case 'GET_DRILLS':
      return action.drills;

    case 'CREATE_DRILL':
      return state.concat(action.drill);

    case 'DELETE_DRILL':
      return state.drills.filter(drill => drill.id !== action.id)

    case 'LIKE_DRILL':
      return action.drills

    default:
      return state;
  }
};
