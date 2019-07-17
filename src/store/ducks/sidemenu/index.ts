import { Reducer } from 'redux';
import { SideMenuTypes, SideMenuState } from './types';

const INITIAL_STATE: SideMenuState = {
  isOpen: false,
};

const reducer: Reducer<SideMenuState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SideMenuTypes.TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case SideMenuTypes.READ_MENU:
      return {
        ...state,
        isOpen: state.isOpen,
        };
    default:
      return state;
  }
};

export default reducer;
