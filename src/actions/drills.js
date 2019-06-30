import {resetDrillForm} from './drillForm';
import { GET_DRILLS, CREATE_DRILL, DELETE_DRILL } from '../constants/actionTypes';

const API_URL = process.env.REACT_APP_API_URL;

const setDrills = drills => {
  return{
    type: GET_DRILLS,
    drills
  }
}

const addDrill = drill => {
  return {
    type: CREATE_DRILL,
    drill,
  }
}

const removeDrill = drillId => {
  return {
    type: DELETE_DRILL,
    drillId: drillId,
    }
}


export const getDrills = () => {
  return dispatch => {
    return fetch(`${API_URL}/drills`), {
      credentials: 'include',
    }
    .then(response => response.json())
    .then(drills => dispatch(setDrills(drills)))
    .catch(error => console.log(error));
  }
}

export const createDrill = (drill, routerHistory) => {
    return dispatch => {
    return fetch(`${API_URL}/drills`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({drill: drill})
    })
      .then(response => response.json())
      .then(drill => {
        dispatch(addDrill(drill))
        dispatch(resetDrillForm())
      })
      .catch(error => console.log(error))
  }
}

export function deleteDrill(id) {
  return dispatch => {
    return fetch(`${API_URL}/drills/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then(respsonse => {
        dispatch(removeDrill(id));
    })
    .catch(error => console.log(error))
  }
}
