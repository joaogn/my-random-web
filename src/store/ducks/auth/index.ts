import { Reducer } from 'redux';
import { AuthTypes, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  isAuth: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.TOGGLE_AUTH:
      return {
        ...state,
        isAuth: !state.isAuth,
      };
    default:
      return state;
  }
};

export default reducer;
