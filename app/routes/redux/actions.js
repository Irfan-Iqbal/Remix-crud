// store/actions.js
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const addData = (values) => ({
  type: ADD_DATA,
  payload: { key: Date.now(), ...values }
});

export const editData = (key, values) => ({
  type: EDIT_DATA,
  payload: { key, values }
});

export const deleteData = (key) => ({
  type: DELETE_DATA,
  payload: { key }
});
