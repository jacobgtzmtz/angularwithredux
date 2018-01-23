import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UP_VOTE = '[Post] Up vote';
export const DOWN_VOTE = '[Post] Down vote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
    readonly type = EDIT_TEXT;
    constructor(public payload: string) {}
}

export class UpVote implements Action {
    readonly type = UP_VOTE;
}

export class DownVote implements Action {
    readonly type = DOWN_VOTE;
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All 
= UpVote 
| DownVote 
| Reset 
| EditText;