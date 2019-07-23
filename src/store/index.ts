import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { SideMenuState } from './ducks/sidemenu/types';
import { LinkItemState } from './ducks/linkitem/types';
import { UserState } from './ducks/user/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';


export interface ApplicationState {
  repositories: RepositoriesState,
  sidemenu: SideMenuState,
  linkitem: LinkItemState,
  user: UserState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
