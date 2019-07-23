/**
 * Action types
 */
export enum UserTypes {
    ADD_USER = '@user/ADD_USER',
    READ_USER = '@user/READ_USER'
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
  }
