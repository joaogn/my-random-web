import { action } from 'typesafe-actions';
import { SideMenuTypes } from './types';


export const toggleMenu = () => action(SideMenuTypes.TOGGLE_MENU);
export const readMenu = () => action(SideMenuTypes.READ_MENU);
