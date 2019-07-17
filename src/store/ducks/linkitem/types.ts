/**
 * Action types
 */
export enum LinkItemTypes {
    CHANGE_LINK = '@linkitem/CHANGE_LINK',
    ADD_ITEM = '@linkitem/ADD_ITEM',
  }

  /**
   * Data types
   */
  export interface LinkItem {
    active: boolean
    name: string
  }

  /**
   * State type
   */
  export interface LinkItemState {
    readonly data: LinkItem[]
  }
