import * as actions from './actionTypes';

export const taskCompleted = (id) => {
    return { type: actions.taskUpdated, payload: { id, completed: true } };
};

export const titleChanged = (id) => {
    return { type: actions.taskUpdated, payload: { id, title: `New title for Task ${id}` } };
};

export const taskDeleted = (id) => {
    return { type: actions.taskDeleted, payload: { id } };
};
