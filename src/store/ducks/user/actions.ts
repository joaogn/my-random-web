import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const addUser = (data: User) => action(UserTypes.ADD_USER, data);
