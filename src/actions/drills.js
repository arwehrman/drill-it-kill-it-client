const API_URL = process.env.REACT_APP_API_URL;

const setDrills = drills =>{
  return{
    type: 'GET_DRILLS',
    drills
  }
}

export const getDrills = () => {
  return dispatch => {
    return fetch('{API_URL}/drills')
    .then(response => response.json())
    .then(drills => dispatch(setDrills(drills)))
    .catch(error => console.log(error));
  }
}
