// ** Drills reducer **
export default(state = [], action) => {
  switch (action.type) {

    case 'GET_DRILLS':
      return action.drills;

    case 'CREATE_DRILL':
      return state.concat(action.drill);


    default:
      return state;
  }
};
