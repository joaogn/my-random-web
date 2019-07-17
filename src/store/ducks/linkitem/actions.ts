import { action } from 'typesafe-actions';
import { LinkItemTypes, LinkItem } from './types';

export const changeLink = (itemlink: LinkItem) => action(LinkItemTypes.CHANGE_LINK, itemlink);

export const addItem = (itemlink: LinkItem) => action(LinkItemTypes.ADD_ITEM, itemlink);
