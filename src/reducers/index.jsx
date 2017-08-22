import { combineReducers } from 'redux';
import Monsters from './reducer_monsters';
import Spells from './reducer_spells';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  monsters: Monsters,
  spells: Spells
});

export default rootReducer;
