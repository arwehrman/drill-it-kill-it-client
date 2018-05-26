export const updateDrillFormData = drillFormData => {
  return {
    type: 'UPDATE_DATA',
    drillFormData
  }
}

export const resetDrillForm = () => {
  return {
    type: 'RESET_DRILL_FORM'
  }
}
