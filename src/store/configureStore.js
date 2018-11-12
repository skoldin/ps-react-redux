import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// For development use. Throws an error when we try to mutate the state
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore( initialState ) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware( thunk, reduxImmutableStateInvariant() )
  );
}