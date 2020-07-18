import Actions from '../Resource/Actions';

const setRegisterSuccess = (data) => {
  return {
    type: Actions.SET_REGISTER_SUCCES,
    data,
  };
};

const getRegisterSuccess = (data) => {
  return {
    type: Actions.GET_REGISTER_SUCCES,
    data,
  };
};

//Registro
const setRegisterUser = (data) => {
  return async (dispatch, getState) => {
    const users = await getState().registerReducer.user;
    // console.warn('setRegisterUser', products);
    // console.warn('setRegisterUser data', data);
    if (users.length >= 0) {
      let usersRegister = [...users, data];
      dispatch(setRegisterSuccess(usersRegister));
    }
  };
};

//Lectura
const getRegisterUser = () => {
  return async (dispatch, getState) => {
    const users = await getState().registerReducer.user;
    //console.warn('getRegisterUser', await getState());
    dispatch(getRegisterSuccess(users));
  };
};

//Limpiar (por probar)
const clearRegisterUser = () => {
  return async (dispatch, getState) => {
    const users = await getState().registerReducer.user;
    if (users.length >= 0) {
      let usersRegisterClear = [...users, ''];
      dispatch(setRegisterSuccess(usersRegisterClear));
    }
  };
};

export default {
  setRegisterUser,
  getRegisterUser,
  clearRegisterUser,
};