import {resetDrillForm} from './drillForm'

const API_URL = process.env.REACT_APP_API_URL;

const setDrills = drills =>{
  return{
    type: 'GET_DRILLS',
    drills
  }
}

const addDrill = drill => {

  return {
    type: 'CREATE_DRILL',
    drill,
  }
}

const removeDrill = (drill) => {
  return {
    type: 'DELETE_DRILL',
    drill: drill
    }
}

export const likeDrill = drill => {
  return {
    type: 'LIKE_DRILL',
    drill: drill.id,
  }
}

export const getDrills = () => {
  return dispatch => {
    return fetch(`${API_URL}/drills`)
    .then(response => response.json())
    .then(drills => dispatch(setDrills(drills)))
    .catch(error => console.log(error));
  }
}

export const createDrill = drill => {
  return dispatch => {
    return fetch(`${API_URL}/drills`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ drill: drill })
    })
    .then(response => response.json())
    .then(drill => {
      dispatch(addDrill(drill))
      dispatch(resetDrillForm())
    })
    .catch(error => console.log(error))
  }
}

export const deleteDrill = drill => {
  return dispatch => {
    return fetch(`${API_URL}/drills/${drill.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ drill: drill }),
    })
    .then(response => response.json())
    .then(drill => dispatch(removeDrill(drill)))
    .catch(error => console.log(error))
  }
}
