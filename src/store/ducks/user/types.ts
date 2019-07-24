/**
 * Action types
 */
export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_FAILURE = '@user/LOAD_FAILURE'
  }

  /**
   * Data types
   */
  export interface User {
    id: number
    name: string
    email: string
  }

  /**
   * State type
   */
  export interface UserState extends User {
    readonly id: number
    readonly name: string
    readonly email: string
    readonly loading: boolean
    readonly error: boolean
  }
