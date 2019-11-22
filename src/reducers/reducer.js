import { works } from '../data/works';
import { team } from '../data/team';

const initialState = {
    works: works,
    team: team
};

const Reducer = (state = initialState) => {
    return state;
};

export default Reducer;