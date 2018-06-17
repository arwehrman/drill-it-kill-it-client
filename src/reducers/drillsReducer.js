// ** Drills reducer **
export default(state = [], action) => {

  switch (action.type) {

    case 'GET_DRILLS':
      return action.drills;

    case 'CREATE_DRILL':
      const drill = Object.assign({}, action.drill)
      return [...state, drill];

    case 'DELETE_DRILL':
     return state.filter(drill => drill.id !== action.drillId);

    case 'LIKE_DRILL':
      return action.drills

    default:
      return state;
  }
};
