/**
 * Action types
 */
export enum SideMenuTypes {
    TOGGLE_MENU = '@sidemenu/TOGGLE_MENU',
    READ_MENU = '@sidemenu/READ_MENU',
  }


  /**
   * State type
   */
  export interface SideMenuState {
    isOpen: boolean
  }
