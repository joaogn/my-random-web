import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
    id: 0,
    name: '',
    email: '',
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.ADD_USER:

      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
       };
    default:
      return state;
  }
};

export default reducer;
