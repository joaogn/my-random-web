/* eslint-disable import/no-cycle */
import store from '../store';
import { toggleAuth } from '../store/ducks/auth/actions';


export const TOKEN_KEY = '@myrandom-Token';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = async (token:string) => {
  store.dispatch(toggleAuth());
  await localStorage.setItem(TOKEN_KEY, token);
};
export const logout = async () => {
  localStorage.removeItem(TOKEN_KEY);
  await store.dispatch(toggleAuth());
};
