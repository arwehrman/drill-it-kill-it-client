const initialState = {
  title: '',
  description: '',
  category: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    
    case 'UPDATE_DATA':
      return action.drillFormData;

    case 'RESET_DRILL_FORM':
      return initialState;

    default:
      return state;
  }
}
