/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import { LinkItemState, LinkItemTypes } from './types';

const INITIAL_STATE: LinkItemState = {
  data: [{ name: '', active: false }],
};

const reducer: Reducer<LinkItemState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LinkItemTypes.ADD_ITEM:
      return { ...state, data: state.data.concat(action.payload) };
    case LinkItemTypes.CHANGE_LINK:
      return {
      ...state,
      data: state.data.map((linkitem) => {
        if (linkitem.name === action.payload.name) {
          linkitem.active = true;
        } else {
          linkitem.active = false;
        }
        return linkitem;
    }),
      };
    default:
      return state;
  }
};

export default reducer;
