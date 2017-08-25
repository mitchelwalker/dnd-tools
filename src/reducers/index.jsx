import { combineReducers } from 'redux';
import Monsters from './reducer_monsters';
import Spells from './reducer_spells';
import Character from './reducer_character';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  monsters: Monsters,
  spells: Spells,
  character: Character
});

export default rootReducer;
