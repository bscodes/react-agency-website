import {combineReducers} from 'redux';
import team from './team.reducer';
import works from './portfolio.reducer';

export default combineReducers({
    team,
    works
});