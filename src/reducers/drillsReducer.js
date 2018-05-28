// ** Drills reducer **
export default(state = [], action) => {
  switch (action.type) {

    case 'GET_DRILLS':
      return action.drills;

    case 'CREATE_DRILL':
      return state.concat(action.drill);

    case 'DELETE_DRILL':
      const drills = state.drills.filter(drill => drill.id !== action.id)
      return { drills }

    default:
      return state;
  }
};
