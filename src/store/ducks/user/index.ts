import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
    id: 0,
    name: '',
    email: '',
    error: false,
    loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UserTypes.LOAD_SUCCESS:
      return {
      ...state,
        loading: false,
        error: false,
        id: action.payload.data.id,
        name: action.payload.data.name,
        email: action.payload.data.email,
      };
    case UserTypes.LOAD_FAILURE:
      return {
      ...state,
       loading: false,
       error: true,
       id: 0,
       name: '',
       email: '',
      };
    default:
      return state;
  }
};

export default reducer;
