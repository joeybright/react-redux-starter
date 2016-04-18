
import { EXAMPLE_ACTION } from '../actions/example';

const defaultExampleState = {
    value: null
};

export default function user(state = defaultExampleState, action) {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state
    };
};
