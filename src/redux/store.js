import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

export default store;
