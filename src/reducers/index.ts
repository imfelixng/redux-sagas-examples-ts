import { combineReducers} from 'redux';
import { myNumberCollectionReducer, MyNumberCollectionState } from './my-number.reducer';

export type State = {
  myNumberCollectionState : MyNumberCollectionState;
};

export const reducers = combineReducers<State>({
  myNumberCollectionState: myNumberCollectionReducer
});
