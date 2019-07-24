/**
 * Action types
 */
export enum AuthTypes {
    TOGGLE_AUTH = '@auth/TOGGLE_AUTH',
  }


  /**
   * State type
   */
  export interface AuthState {
    isAuth: boolean
  }
