import * as PostActions from '../actions/post.actions';
import { postModel } from '../models/post.model';

export type Action = PostActions.All;

const defaultState: postModel = {
    text: 'Do you like angular with redux?',
    likes: 0
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function postReducer(state: postModel = defaultState, action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        case PostActions.UP_VOTE:
            return newState(state, { likes: state.likes + 1 });
        case PostActions.DOWN_VOTE:
            return newState(state, { likes: state.likes - 1 });
        case PostActions.RESET:
            return defaultState;
        default:
            return state;
    }
}