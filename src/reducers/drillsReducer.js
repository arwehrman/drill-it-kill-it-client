// ** Drills reducer **
export default(state = [], action) => {
  let index;
  let drill;

  switch (action.type) {

    case 'GET_DRILLS':
      return action.drills;

    case 'CREATE_DRILL':
      return state.concat(action.drill);

    case 'DELETE_DRILL':
      return state.drills.filter(drill => drill.id !== action.id)

    case 'LIKE_DRILL':
      index = state.drills(drill => drill.id === action.id);
      drill = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, drill, { drills: drill.likes += 1 }),
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
};
