import {resetDrillForm} from './drillForm';
import { GET_DRILLS, CREATE_DRILL, DELETE_DRILL, LIKE_DRILL } from '../constants/actionTypes';

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
    drillID: drillId,
    }
}

export const addLike = drill => {
  return {
    type: LIKE_DRILL,
    drillId: drill,
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

export const likeDrill = drill => {
  const updatedDrill = Object.assign(...drill, { likes: drill.likes += 1 })
  return dispatch => {
    return fetch(`${API_URL}/drills/${drill.id}`, {
      method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({drill: updatedDrill})
      })
      .then(response => response.json())
      .then(drill => { dispatch(addLike(drill))})
  }
}


export function deleteDrill(drillId) {
  return dispatch => {
    return fetch(`${API_URL}/drills/${drillId}`, {
      method: 'DELETE',
    }).then(res => { dispatch(removeDrill(drillId))
    })
  }
}
