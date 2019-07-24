import { action } from 'typesafe-actions';
import { AuthTypes } from './types';


export const toggleAuth = () => action(AuthTypes.TOGGLE_AUTH);
