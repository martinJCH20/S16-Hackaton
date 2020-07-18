import Actions from '../../Resource/Actions';

const initialState = {
  user: [],
  errors: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_REGISTER_SUCCES:
      return {
        ...state,
        user: action.data,
        success: true,
      };
    case Actions.GET_REGISTER_SUCCES:
      return {
        ...state,
        user: action.data,
        success: true,
      };
    case Actions.CLEAR_REGISTER_SUCCES:
      return {
        ...state,
        user: action.data,
        success: true,
      };
    default:
      return state;
  }
};

export default registerReducer;